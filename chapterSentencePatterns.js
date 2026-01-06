// chapterSentencePatterns.js
// 英文法の核心：5つの基本文型と必須動詞 演習50問

const chapterSentencePatterns = [
    // ==========================================
    // 【1】第1文型 (SV + 修飾語) & 自動詞の用法
    // ==========================================
    {
        id: 1,
        text: "彼は公園へ走っていきました。",
        answer: "He ran to the park",
        choices: ["He", "ran", "to", "the", "park", "at", "in"],
        hint: "runは自動詞。方向を示すには前置詞toが必要です"
    },
    {
        id: 2,
        text: "その星を見て。",
        answer: "Look at the star",
        choices: ["Look", "at", "the", "star", "to", "for"],
        hint: "lookは単独では「〜を見る」にならず、atとセットで使います"
    },
    {
        id: 3,
        text: "私の言うことをよく聞いてください。",
        answer: "Please listen to me",
        choices: ["Please", "listen", "to", "me", "at", "on"],
        hint: "listenは対象に向き合う際、toを伴います"
    },
    {
        id: 4,
        text: "彼女は将来について父親と語り合いました。",
        answer: "She spoke with her father about the future",
        choices: ["She", "spoke", "with", "her", "father", "about", "the", "future", "to"],
        hint: "speak with 人 about 物事 の形を意識しましょう"
    },
    {
        id: 5,
        text: "私たちはこの街で暮らしています。",
        answer: "We live in this city",
        choices: ["We", "live", "in", "this", "city", "at", "to"],
        hint: "liveは場所を表す際に前置詞（inやat）が必要です"
    },

    // ==========================================
    // 【2】第2文型 (SVC) & 状態・変化の表現
    // ==========================================
    {
        id: 6,
        text: "彼女は有名な歌手になりました。",
        answer: "She became a famous singer",
        choices: ["She", "became", "a", "famous", "singer", "to", "be"],
        hint: "S=C（彼女＝歌手）の関係が成り立つ文型です"
    },
    {
        id: 7,
        text: "その料理は美味しそうに見えます。",
        answer: "The dish looks delicious",
        choices: ["The", "dish", "looks", "delicious", "deliciously", "like"],
        hint: "look + 形容詞で「〜の状態に見える」となります"
    },
    {
        id: 8,
        text: "彼はまるでヒーローのように見えます。",
        answer: "He looks like a hero",
        choices: ["He", "looks", "like", "a", "hero", "as"],
        hint: "後ろに名詞を置く場合は look like 〜 を使います"
    },
    {
        id: 9,
        text: "それは素晴らしい計画に聞こえますね。",
        answer: "That sounds like a great plan",
        choices: ["That", "sounds", "like", "a", "great", "plan", "as"],
        hint: "sound like + 名詞で「〜のように聞こえる（思える）」"
    },
    {
        id: 10,
        text: "観客は静かなままでした。",
        answer: "The audience stayed quiet",
        choices: ["The", "audience", "stayed", "quiet", "quietly", "keep"],
        hint: "stay + 形容詞で「〜の状態のままでいる」"
    },
    {
        id: 11,
        text: "このスープは少し塩辛い味がします。",
        answer: "This soup tastes a bit salty",
        choices: ["This", "soup", "tastes", "a", "bit", "salty", "saltily"],
        hint: "taste + 形容詞で「〜の味がする」"
    },
    {
        id: 12,
        text: "空が暗くなってきました。",
        answer: "The sky got dark",
        choices: ["The", "sky", "got", "dark", "darkly", "became"],
        hint: "get + 形容詞で「（状態が）〜になる」"
    },
    {
        id: 13,
        text: "予言が的中しました（現実にきた）。",
        answer: "The prediction came true",
        choices: ["The", "prediction", "came", "true", "truly", "real"],
        hint: "come true（実現する）は第2文型の慣用表現です"
    },
    {
        id: 14,
        text: "その卵は腐ってしまいました（悪くなった）。",
        answer: "The eggs went bad",
        choices: ["The", "eggs", "went", "bad", "badly", "wrong"],
        hint: "go badで「食べ物が腐る・悪くなる」を意味します"
    },
    {
        id: 15,
        text: "赤ちゃんはすぐに眠りにつきました。",
        answer: "The baby fell asleep quickly",
        choices: ["The", "baby", "fell", "asleep", "quickly", "sleepy", "sleeping"],
        hint: "fall asleep（眠りに落ちる）は非常に重要なSVCフレーズです"
    },

    // ==========================================
    // 【3】第3文型 (SVO) & 前置詞不要な他動詞
    // ==========================================
    {
        id: 16,
        text: "私たちはその島を訪れました。",
        answer: "We visited the island",
        choices: ["We", "visited", "the", "island", "to", "at"],
        hint: "visitは他動詞。直後に目的語を置きます（toは不要）"
    },
    {
        id: 17,
        text: "私たちはその計画について議論しました。",
        answer: "We discussed the plan",
        choices: ["We", "discussed", "the", "plan", "about", "on"],
        hint: "discussは他動詞。「〜について」の意味が含まれるのでaboutは不要"
    },
    {
        id: 18,
        text: "台風がその地域に近づいています。",
        answer: "A typhoon is approaching the area",
        choices: ["A", "typhoon", "is", "approaching", "the", "area", "to"],
        hint: "approachは他動詞。直後に場所を置きます"
    },
    {
        id: 19,
        text: "ついに山頂に到達しました（reachを使用）。",
        answer: "We reached the summit at last",
        choices: ["We", "reached", "the", "summit", "at", "last", "to"],
        hint: "reachは他動詞。目的地の前に前置詞は要りません"
    },
    {
        id: 20,
        text: "彼は建物に入りました。",
        answer: "He entered the building",
        choices: ["He", "entered", "the", "building", "into", "to"],
        hint: "enter（入る）は他動詞。intoを入れないよう注意"
    },
    {
        id: 21,
        text: "彼女はカスタマーサービスに連絡しました。",
        answer: "She contacted customer service",
        choices: ["She", "contacted", "customer", "service", "with", "to"],
        hint: "contactは他動詞。直接相手を目的語に取ります"
    },
    {
        id: 22,
        text: "彼は同級生と結婚しました。",
        answer: "He married his classmate",
        choices: ["He", "married", "his", "classmate", "with", "to"],
        hint: "marryは他動詞。withを置かないのがポイントです"
    },
    {
        id: 23,
        text: "ご両親に「ありがとう」と伝えてください。",
        answer: "Please say thank you to your parents",
        choices: ["Please", "say", "thank", "you", "to", "your", "parents", "with"],
        hint: "say 物 to 人。sayは他動詞ですが、人はtoの後に置きます"
    },
    {
        id: 24,
        text: "私にはその二つの違いが分かります。",
        answer: "I can tell the difference between them",
        choices: ["I", "can", "tell", "the", "difference", "between", "them", "know"],
        hint: "tell（見分ける、識別する）という他動詞の使い方です"
    },

    // ==========================================
    // 【4】第4文型 (SVOO) & 授与動詞（人に物を〜する）
    // ==========================================
    {
        id: 25,
        text: "彼女にプレゼントをあげましょう。",
        answer: "I will give her a present",
        choices: ["I", "will", "give", "her", "a", "present", "to", "for"],
        hint: "give 人 物（第4文型）"
    },
    {
        id: 26,
        text: "私はその秘密を君に教えるよ（giveを使用）。",
        answer: "I give the secret to you",
        choices: ["I", "give", "the", "secret", "to", "you", "for"],
        hint: "give 物 to 人（第3文型への書き換え）"
    },
    {
        id: 27,
        text: "私は車を彼に貸しました。",
        answer: "I lent my car to him",
        choices: ["I", "lent", "my", "car", "to", "him", "for"],
        hint: "lend 物 to 人"
    },
    {
        id: 28,
        text: "先生が私たちに数学を教えてくれます。",
        answer: "The teacher teaches us math",
        choices: ["The", "teacher", "teaches", "us", "math", "to", "for"],
        hint: "teach 人 物"
    },
    {
        id: 29,
        text: "あなたに椅子を持ってきてあげましょう。",
        answer: "I will get you a chair",
        choices: ["I", "will", "get", "you", "a", "chair", "for", "to"],
        hint: "get 人 物"
    },
    {
        id: 30,
        text: "私はあなたのために椅子を持ってきました。",
        answer: "I got a chair for you",
        choices: ["I", "got", "a", "chair", "for", "you", "to"],
        hint: "get 物 for 人（getやbuyはforを使います）"
    },
    {
        id: 31,
        text: "彼は娘に新しい靴を買ってあげました。",
        answer: "He bought his daughter new shoes",
        choices: ["He", "bought", "his", "daughter", "new", "shoes", "for", "to"],
        hint: "buy 人 物"
    },
    {
        id: 32,
        text: "彼は娘のために新しい靴を買いました。",
        answer: "He bought new shoes for his daughter",
        choices: ["He", "bought", "new", "shoes", "for", "his", "daughter", "to"],
        hint: "buy 物 for 人"
    },
    {
        id: 33,
        text: "彼女が私に朝食を作ってくれました。",
        answer: "She made me breakfast",
        choices: ["She", "made", "me", "breakfast", "for", "to"],
        hint: "make 人 物"
    },
    {
        id: 34,
        text: "その話を私たちに聞かせて（伝えて）ください。",
        answer: "Please tell the story to us",
        choices: ["Please", "tell", "the", "story", "to", "us", "for"],
        hint: "tell 物 to 人"
    },

    // ==========================================
    // 【5】第5文型 (SVOC) & 目的語の状態
    // ==========================================
    {
        id: 35,
        text: "私たちはその猫をタマと呼びます。",
        answer: "We call the cat Tama",
        choices: ["We", "call", "the", "cat", "Tama", "as", "to"],
        hint: "O=C（猫＝タマ）の関係です"
    },
    {
        id: 36,
        text: "彼は窓を壊れたままにしました。",
        answer: "He left the window broken",
        choices: ["He", "left", "the", "window", "broken", "break", "breaking"],
        hint: "O=C（窓＝壊れている状態）"
    },
    {
        id: 37,
        text: "その本がとても面白いと分かりました。",
        answer: "I found the book very interesting",
        choices: ["I", "found", "the", "book", "very", "interesting", "interestingly"],
        hint: "find O C（OがCだとわかる・気づく）"
    },
    {
        id: 38,
        text: "彼女は部屋をきれいに保っています。",
        answer: "She keeps her room clean",
        choices: ["She", "keeps", "her", "room", "clean", "cleanly"],
        hint: "O=C（部屋＝きれい）"
    },
    {
        id: 39,
        text: "そのニュースは彼を悲しませました。",
        answer: "The news made him sad",
        choices: ["The", "news", "made", "him", "sad", "sadly"],
        hint: "make O C（OをCの状態にする）"
    },
    {
        id: 40,
        text: "エンジンをかけたままにしておいてください。",
        answer: "Please keep the engine running",
        choices: ["Please", "keep", "the", "engine", "running", "run", "to", "run"],
        hint: "keep O C（OをCのままにする）"
    },
    {
        id: 41,
        text: "彼女は傘を電車に置き忘れました（放置した）。",
        answer: "She left her umbrella on the train",
        choices: ["She", "left", "her", "umbrella", "on", "the", "train", "forgot"],
        hint: "leave（〜を置き去りにする・放置する）"
    },
    {
        id: 42,
        text: "私は荷物を準備しました。",
        answer: "I got my luggage ready",
        choices: ["I", "got", "my", "luggage", "ready", "readily"],
        hint: "get O ready（Oを準備ができた状態にする）"
    },

    // ==========================================
    // 【6】副詞（here, there等）を伴う表現
    // ==========================================
    {
        id: 43,
        text: "私は夜遅くに帰宅しました。",
        answer: "I got home late at night",
        choices: ["I", "got", "home", "late", "at", "night", "to"],
        hint: "homeは副詞なので、go toやget toのtoは不要です"
    },
    {
        id: 44,
        text: "私たちは正午にオフィスに着きました（getを使用）。",
        answer: "We got to the office at noon",
        choices: ["We", "got", "to", "the", "office", "at", "noon"],
        hint: "officeは名詞なので、到達のtoが必要です"
    },
    {
        id: 45,
        text: "彼はひとりでそこへ行きました。",
        answer: "He went there alone",
        choices: ["He", "went", "there", "alone", "to", "by"],
        hint: "there（そこへ）は副詞なのでtoは不要です"
    },
    {
        id: 46,
        text: "ここへ来て座ってください。",
        answer: "Come here and sit down",
        choices: ["Come", "here", "and", "sit", "down", "to", "at"],
        hint: "hereも副詞です。Come to hereとは言いません"
    },
    {
        id: 47,
        text: "私の兄は留学しています（海外へ行っている）。",
        answer: "My brother went abroad to study",
        choices: ["My", "brother", "went", "abroad", "to", "study", "in"],
        hint: "abroad（海外へ）は副詞なので前置詞は不要"
    },
    {
        id: 48,
        text: "荷物を上の階へ運んでいただけますか。",
        answer: "Can you take the bags upstairs",
        choices: ["Can", "you", "take", "the", "bags", "upstairs", "to"],
        hint: "upstairs（上の階へ）は副詞です"
    },
    {
        id: 49,
        text: "彼らは地下へ降りました。",
        answer: "They went underground",
        choices: ["They", "went", "underground", "to", "into"],
        hint: "undergroundも副詞的な働きをします"
    },
    {
        id: 50,
        text: "私たちは週末、繁華街へ繰り出します。",
        answer: "We go downtown on weekends",
        choices: ["We", "go", "downtown", "on", "weekends", "to", "at"],
        hint: "downtown（中心街へ）は副詞。toを使わないよう注意"
    }
];