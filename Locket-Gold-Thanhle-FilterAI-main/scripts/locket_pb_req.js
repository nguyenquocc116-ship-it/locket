/***********************************************
> Locket Photobooth & AI Filter Request Engine
> Tác giả: Thanh Lê (@thanhlh05)
> Base: Nightmarket & MinhHiep08
> Hỗ trợ: Shadowrocket, Loon, Surge, Quantumult X
> Tính năng:
>   - Reroute nội bộ sang Cloudflare Worker bảo mật (không dùng 307 redirect)
>   - Khắc phục 100% lỗi "Không thể áp dụng bộ lọc"
>   - Tự động map ID sticker AI và đính kèm prompt chuẩn Locket
***********************************************/

(function () {
    const WORKER_HOST = "https://locket-vip.mhiep20077.workers.dev";
    const TARGET_URL = `${WORKER_HOST}/generateFilteredImage?module=Locket_YouTube`;

    const STICKER_ID_MAP = {
        "stk_rose_flower": "rose_flower",
        "rose_flower": "rose_flower",
        "stk_shrek_ogre": "shrek_ogre",
        "shrek_ogre": "shrek_ogre",
        "stk_superhero_cape": "superhero_cape",
        "superhero_cape": "superhero_cape",
        "stk_spooky_ghost": "spooky_ghost",
        "spooky_ghost": "spooky_ghost",
        "stk_pirate_hat": "pirate_hat",
        "pirate_hat": "pirate_hat",
        "stk_volcano_lava": "volcano_lava",
        "volcano_lava": "volcano_lava",
        "stk_rain_storm": "rain_storm",
        "rain_storm": "rain_storm",
        "stk_fortnite_llama": "fortnite_llama",
        "fortnite_llama": "fortnite_llama",
        "stk_watercolor_art": "watercolor_art",
        "watercolor_art": "watercolor_art",
        "stk_golden_hour": "golden_hour",
        "golden_hour": "golden_hour",
        "stk_jungle_leaf": "jungle_leaf",
        "jungle_leaf": "jungle_leaf",
        "stk_cute_zombie": "cute_zombie",
        "cute_zombie": "cute_zombie",
        "stk_fireworks": "fireworks",
        "fireworks": "fireworks",
        "stk_new_year_2026": "new_year_2026",
        "new_year_2026": "new_year_2026",
        "stk_harry_potter": "harry_potter",
        "harry_potter": "harry_potter",
        "stk_minecraft": "minecraft",
        "minecraft": "minecraft",
        "stk_fire_flame": "fire_flame",
        "fire_flame": "fire_flame",
        "stk_giant_spider": "giant_spider",
        "giant_spider": "giant_spider",
        "stk_ocean_underwater": "ocean_underwater",
        "ocean_underwater": "ocean_underwater",
        "stk_ufo_alien": "ufo_alien",
        "ufo_alien": "ufo_alien",
        "stk_dio_disco": "disco_lights",
        "disco": "disco_lights",
        "stk_dio_pm2": "locket",
        "stk_dio_cash": "cash_money",
        "cash": "cash_money",
        "stk_dio_wedding": "wedding",
        "wedding": "wedding",
        "stk_dio_cowboy": "cowboy_cowgirl",
        "cowboy": "cowboy_cowgirl",
        "stk_dio_looksmaxing": "looks_maxxing",
        "looksmaxing": "looks_maxxing",
        "stk_dio_orange_wig": "okay_wig",
        "orange_wig": "okay_wig",
        "stk_dio_bleached_hair": "blonde_bleached",
        "bleached_hair": "blonde_bleached",
        "stk_dio_bob": "bob_cut",
        "bob": "bob_cut",
        "stk_dio_bearded": "beard",
        "bearded": "beard",
        "stk_dio_bearded_holiday": "bearded",
        "stk_dio_sweat_hearts": "sweet_hearts",
        "sweat_hearts": "sweet_hearts",
        "stk_dio_elf": "elf_cutout",
        "elf": "elf_cutout",
        "stk_dio_santa": "santa_cutout",
        "santa": "santa_cutout",
        "stk_dio_easter_bunny": "easter_bunney_cutout",
        "easter_bunny": "easter_bunney_cutout",
        "stk_dio_easter_chick": "easter_chick_cutout",
        "easter_chick": "easter_chick_cutout",
        "stk_dio_toothless": "toothless",
        "toothless": "toothless",
        "stk_dio_bye_brows": "bye_brows",
        "bye_brows": "bye_brows",
        "stk_dio_bowling_ball": "bowling_ball",
        "bowling_ball": "bowling_ball",
        "stk_dio_buns": "buns",
        "buns": "buns",
        "stk_dio_mohawk": "mohawk",
        "mohawk": "mohawk",
        "stk_dio_braces": "braces",
        "braces": "braces",
        "stk_dio_slimed": "slimed",
        "slimed": "slimed",
        "stk_dio_princess": "princess",
        "princess": "princess",
        "stk_dio_happy_birthday": "happy_birthday",
        "happy_birthday": "happy_birthday",
        "stk_dio_cutesy": "cutesy",
        "cutesy": "cutesy",
        "stk_dio_sticker_face": "sticker_face",
        "sticker_face": "sticker_face",
        "stk_dio_flower_crown": "flower_crown",
        "flower_crown": "flower_crown",
        "stk_dio_love_bug": "love_bug",
        "love_bug": "love_bug",
        "stk_dio_giraffe": "giraffe",
        "giraffe": "giraffe",
        "stk_dio_clown": "clown",
        "clown": "clown",
        "stk_dio_leprechaun": "leprechaun",
        "leprechaun": "leprechaun",
        "stk_dio_lucky_face": "lucky_face",
        "lucky_face": "lucky_face",
        "stk_dio_frosty": "frosty",
        "frosty": "frosty",
        "stk_dio_influencer": "influencer",
        "influencer": "influencer"
    };

    const AI_PROMPTS = {
        "rose_flower": "Show the person in the photo with the exact same pose and background, but have them with a single rose in their mouth. If no person is present in the input, do not add anything to the output.",
        "shrek_ogre": "Show the person in the photo with the exact same pose and background, but transform them into Shrek with rounded ears, and rustic clothing while preserving the pose. Keep their hairstyle, but make it look natural in the Shrek style.",
        "superhero_cape": "Show the person in the photo with the exact same pose and background, but suit them up like a superhero in a blue and red outfit with a flowing cape while keeping their pose and framing identical.",
        "spooky_ghost": "Show the person in the photo with the exact same pose, expression, and background, but subtly insert a realistic-looking ghost somewhere in the background. If no person is present, do not add any people to the output.",
        "pirate_hat": "Show the person in the photo with the exact same pose and background, but dress them like a pirate from Pirates of the Caribbean while keeping their pose and facial expression identical.",
        "volcano_lava": "Show the person in the photo with the exact same pose, background, and facial expression, but replace the ground with molten lava, glowing magma cracks, and volcanic sparks while keeping them rooted to the spot.",
        "rain_storm": "Retain the exact pose, facial features, distance, and background from the original image. Dress the subject as a character from the Wuthering Heights movie.",
        "fortnite_llama": "Show the person in the photo with the exact same pose, expression, and background, but make the entire scene look like it was rendered inside a video game, similar to the style of Fortnite.",
        "watercolor_art": "Show the person in the photo with the exact same pose, expression, and background, but render the entire scene as a watercolor painting with flowing brush strokes.",
        "golden_hour": "Show the person in the photo with the exact same pose, expression, and background, but make the scene look like it was captured during peak golden hour with warm sunlight and long shadows.",
        "jungle_leaf": "Show the person in the photo with the exact same pose, background, and facial expression, but with their background surroundings overgrown with plants in a seamless way.",
        "cute_zombie": "Show the person in the photo with the exact same pose and background, but turn them into a zombie while keeping their pose and expression identical.",
        "fireworks": "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject.",
        "new_year_2026": "Show the person in the photo with the exact same pose and background, but have them wearing decorative glasses that say Happy New Year 2026.",
        "harry_potter": "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houses.",
        "minecraft": "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks.",
        "fire_flame": "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face.",
        "giant_spider": "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere.",
        "ocean_underwater": "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater.",
        "ufo_alien": "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden in the background.",
        "disco_lights": "Show the persons in the photo with the exact same pose and background, but with disco-style lighting effects cast across the scene, captured with a modern iPhone camera look.",
        "influencer": "Show the persons in the photo with the exact same pose and background, but with an influencer makeup look applied to the face.",
        "princess": "Show the person in the photo with the exact same pose and background, but portray them as a prince charming or a beautiful princess from a fairytale.",
        "looks_maxxing": "Show the persons in the photo with the exact same pose and background, but with a full, well-groomed beard added to the face.",
        "beard": "Show the persons in the photo with the exact same pose and background, but with a full, natural beard added to the face.",
        "slimed": "Show the persons in the photo with the exact same pose and background, but with thick green slime splashing throughout the scene.",
        "cowboy_cowgirl": "Show the persons in the photo with the exact same pose and background, but with subjects dressed in Western attire.",
        "clown": "Show the persons in the photo with the exact same pose and background, but styled as cheerful clowns with colorful wigs.",
        "tatted": "Show the persons in the photo with the exact same pose and background, but with subtle stylish face tattoos applied.",
        "bye_brows": "Show the persons in the photo with the exact same pose and background, but with eyebrow hair cleanly removed.",
        "bowling_ball": "Show the persons in the photo with the exact same pose and background, but with a bald head.",
        "blonde_bleached": "Show the persons in the photo with the exact same pose and background, but with buzzed and bleached blonde hair.",
        "bob_cut": "Show the persons in the photo with the exact same pose and background, but with their hair cut into a chic chin-length bob hairstyle.",
        "mohawk": "Show the persons in the photo with the exact same pose and background, but with a styled mohawk haircut.",
        "braces": "Show the persons in the photo with the exact same pose and background, but with multicolored braces on their teeth.",
        "flower_crown": "Show the persons in the photo with the exact same pose and background, but wearing a mixed wildflower crown.",
        "giraffe": "Show the persons in the photo with the exact same pose and background, but wearing a cute plush giraffe costume.",
        "leprechaun": "Show the person in the photo with the exact same pose and background, but dressed in a leprechaun costume with a green hat.",
        "lucky_face": "Show the person in the photo with the exact same pose and background, but with cute freckles and subtle green clover stickers on cheeks.",
        "elf_cutout": "Show the person in the photo with the exact same pose and background, but dressed up as an Elf.",
        "santa_cutout": "Show the person in the photo with the exact same pose and background, but dressed up as Santa Claus.",
        "easter_chick_cutout": "Show the persons in the photo with the exact same pose and background, but in a bright yellow Easter chick costume.",
        "photobooth": "Show the persons in the photo with the exact same pose and background, captured with a Korean photobooth 4-cut aesthetic, vintage soft lighting, 8k resolution.",
        "photobooth_4cut": "Show the persons in the photo with the exact same pose and background, captured with a Korean photobooth 4-cut aesthetic, vintage soft lighting, 8k resolution.",
        "photobooth_cute": "Show the persons in the photo with the exact same pose and background, captured with a cute pastel aesthetic, soft lighting, 8k resolution."
    };

    // =========================================================================
    // 1. CHIỀU REQUEST: REROUTE NỘI BỘ SANG WORKER
    // =========================================================================
    if (typeof $response === "undefined") {
        try {
            if (typeof $request === "undefined" || !$request) return $done({});

            let headers = Object.assign({}, $request.headers || {});
            headers["Host"] = "locket-vip.mhiep20077.workers.dev";
            headers["host"] = "locket-vip.mhiep20077.workers.dev";
            headers["X-Module-Origin"] = "Locket_YouTube";

            // Xóa cache headers
            delete headers["if-none-match"];
            delete headers["If-None-Match"];
            delete headers["if-modified-since"];
            delete headers["If-Modified-Since"];

            let body = $request.body;
            if (body && typeof body === "string") {
                try {
                    let reqData = JSON.parse(body);
                    let payload = reqData.data || reqData;
                    let fid = payload.filter_id || payload.filterId || payload.filter;

                    if (fid) {
                        let mappedId = STICKER_ID_MAP[fid] || fid;
                        if (payload.filter_id) payload.filter_id = mappedId;
                        if (payload.filterId) payload.filterId = mappedId;
                        if (payload.filter) payload.filter = mappedId;

                        if (!payload.prompt && AI_PROMPTS[mappedId]) {
                            payload.prompt = AI_PROMPTS[mappedId];
                        }
                        body = JSON.stringify(reqData);
                    }
                } catch (e) {}
            }

            return $done({
                url: TARGET_URL,
                headers: headers,
                body: body
            });
        } catch (e) {
            return $done({});
        }
    }

    // =========================================================================
    // 2. CHIỀU RESPONSE: DỌN SẠCH MÃ LỖI TỪ SERVER
    // =========================================================================
    try {
        if (typeof $response !== "undefined" && $response.body) {
            let resObj = {};
            try {
                resObj = JSON.parse($response.body);
            } catch (e) {
                resObj = {};
            }

            delete resObj.error;
            delete resObj.errors;
            if (resObj.result) {
                delete resObj.result.error;
                delete resObj.result.errors;
            }

            let respHeaders = Object.assign({}, $response.headers || {});
            delete respHeaders["Content-Encoding"];
            delete respHeaders["content-encoding"];
            delete respHeaders["Content-Length"];
            delete respHeaders["content-length"];
            delete respHeaders["Transfer-Encoding"];
            delete respHeaders["transfer-encoding"];
            respHeaders["content-type"] = "application/json; charset=utf-8";

            return $done({
                status: 200,
                headers: respHeaders,
                body: JSON.stringify(resObj)
            });
        }
    } catch (e) {}

    return $done({});
})();
