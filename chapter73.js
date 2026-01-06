// chapter73.js
// 接続詞 (if / because) 全50問 - 更新版（新語彙ver）

const chapter73 = [
    // ==========================================
    // 【A】because を使って文を完成させる（理由）
    // ==========================================
    {
        id: 1,
        text: "交通渋滞のせいで、彼女は会議に遅れました。",
        answer: "She was late for the meeting because of the traffic jam",
        choices: ["She", "was", "late", "for", "the", "meeting", "because", "of", "the", "traffic", "jam", "if"],
        hint: "traffic jam（交通渋滞）"
    },
    {
        id: 2,
        text: "この料理はとても美味しいので、私は大好きです。",
        answer: "I love this dish because it is delicious",
        choices: ["I", "love", "this", "dish", "because", "it", "is", "delicious", "if"],
        hint: "delicious（美味しい）"
    },
    {
        id: 3,
        text: "プレゼンをしなければならないので、彼は緊張しています。",
        answer: "He is nervous because he has to give a presentation",
        choices: ["He", "is", "nervous", "because", "he", "has", "to", "give", "a", "presentation", "so"],
        hint: "nervous（緊張している）"
    },
    {
        id: 4,
        text: "非常に寒かったので、彼らはキャンプを中止しました。",
        answer: "They canceled the camping because it was freezing",
        choices: ["They", "canceled", "the", "camping", "because", "it", "was", "freezing", "if"],
        hint: "freezing（凍えるほど寒い）"
    },
    {
        id: 5,
        text: "環境に良いので、私は自転車で通勤しています。",
        answer: "I commute by bike because it is good for the environment",
        choices: ["I", "commute", "by", "bike", "because", "it", "is", "good", "for", "the", "environment", "so"],
        hint: "environment（環境）"
    },
    {
        id: 6,
        text: "景色が素晴らしいので、この場所が好きです。",
        answer: "I like this place because the view is magnificent",
        choices: ["I", "like", "this", "place", "because", "the", "view", "is", "magnificent", "if"],
        hint: "magnificent（壮大な、素晴らしい）"
    },
    {
        id: 7,
        text: "締め切りが近いので、彼女は急いでいます。",
        answer: "She is in a hurry because the deadline is near",
        choices: ["She", "is", "in", "a", "hurry", "because", "the", "deadline", "is", "near", "when"],
        hint: "deadline（締め切り）"
    },
    {
        id: 8,
        text: "経験が豊富なので、彼はその仕事に選ばれました。",
        answer: "He was chosen for the job because he has a lot of experience",
        choices: ["He", "was", "chosen", "for", "the", "job", "because", "he", "has", "a", "lot", "of", "experience", "if"],
        hint: "experience（経験）"
    },
    {
        id: 9,
        text: "パスポートを忘れたので、彼は海外に行けませんでした。",
        answer: "He couldn't go abroad because he forgot his passport",
        choices: ["He", "couldn't", "go", "abroad", "because", "he", "forgot", "his", "passport", "when"],
        hint: "abroad（海外へ）"
    },
    {
        id: 10,
        text: "とても便利なので、みんなそのアプリを使っています。",
        answer: "Everyone uses the app because it is very convenient",
        choices: ["Everyone", "uses", "the", "app", "because", "it", "is", "very", "convenient", "so"],
        hint: "convenient（便利な）"
    },
    {
        id: 11,
        text: "とても暗かったので、彼は懐中電灯を使いました。",
        answer: "He used a flashlight because it was very dark",
        choices: ["He", "used", "a", "flashlight", "because", "it", "was", "very", "dark", "if"],
        hint: "flashlight（懐中電灯）"
    },
    {
        id: 12,
        text: "彼らは疲れ果てていたので、早く寝ました。",
        answer: "They went to bed early because they were exhausted",
        choices: ["They", "went", "to", "bed", "early", "because", "they", "were", "exhausted", "so"],
        hint: "exhausted（疲れ果てた）"
    },
    {
        id: 13,
        text: "健康を維持したいので、彼女は毎日走ります。",
        answer: "She runs every day because she wants to stay healthy",
        choices: ["She", "runs", "every", "day", "because", "she", "wants", "to", "stay", "healthy", "if"],
        hint: "stay healthy（健康を維持する）"
    },
    {
        id: 14,
        text: "財布を失くしたので、私はショックを受けました。",
        answer: "I was shocked because I lost my wallet",
        choices: ["I", "was", "shocked", "because", "I", "lost", "my", "wallet", "so"],
        hint: "shocked（ショックを受けた）"
    },
    {
        id: 15,
        text: "とても礼儀正しいので、彼はみんなに好かれています。",
        answer: "He is liked by everyone because he is very polite",
        choices: ["He", "is", "liked", "by", "everyone", "because", "he", "is", "very", "polite", "if"],
        hint: "polite（礼儀正しい）"
    },

    // ==========================================
    // 【B】if を使って文を完成させる（条件）
    // ==========================================
    {
        id: 16,
        text: "もし準備ができたら、知らせてください。",
        answer: "Please let me know if you are ready",
        choices: ["Please", "let", "me", "know", "if", "you", "are", "ready", "because"],
        hint: "let me know（私に知らせる）"
    },
    {
        id: 17,
        text: "もし問題が発生したら、私に連絡してください。",
        answer: "If a problem occurs please contact me",
        choices: ["If", "a", "problem", "occurs", "please", "contact", "me", "because"],
        hint: "occur（起こる、発生する）"
    },
    {
        id: 18,
        text: "もし興味があるなら、この本を借りてもいいですよ。",
        answer: "You can borrow this book if you are interested",
        choices: ["You", "can", "borrow", "this", "book", "if", "you", "are", "interested", "so"],
        hint: "interested（興味がある）"
    },
    {
        id: 19,
        text: "もし雨が激しく降れば、イベントは中止になります。",
        answer: "If it rains heavily the event will be canceled",
        choices: ["If", "it", "rains", "heavily", "the", "event", "will", "be", "canceled", "because"],
        hint: "heavily（激しく）/ be canceled（中止される）"
    },
    {
        id: 20,
        text: "もし機会があれば、日本を訪れたいです。",
        answer: "I'd like to visit Japan if I have the opportunity",
        choices: ["I'd", "like", "to", "visit", "Japan", "if", "I", "have", "the", "opportunity", "so"],
        hint: "opportunity（機会、チャンス）"
    },
    {
        id: 21,
        text: "もし助けが必要なら、同僚に頼みなさい。",
        answer: "If you need help ask your colleagues",
        choices: ["If", "you", "need", "help", "ask", "your", "colleagues", "because"],
        hint: "colleague（同僚）"
    },
    {
        id: 22,
        text: "もし急げば、最終電車に間に合うかもしれません。",
        answer: "You might catch the last train if you hurry",
        choices: ["You", "might", "catch", "the", "last", "train", "if", "you", "hurry", "so"],
        hint: "might（〜かもしれない）/ catch（間に合う）"
    },
    {
        id: 23,
        text: "もしそれが高すぎるなら、別のものを買いましょう。",
        answer: "If it is too expensive let's buy another one",
        choices: ["If", "it", "is", "too", "expensive", "let's", "buy", "another", "one", "because"],
        hint: "expensive（高価な）"
    },
    {
        id: 24,
        text: "もしあなたが賛成なら、プロジェクトを始めます。",
        answer: "We will start the project if you agree",
        choices: ["We", "will", "start", "the", "project", "if", "you", "agree", "so"],
        hint: "agree（同意する、賛成する）"
    },
    {
        id: 25,
        text: "もし将来を心配しているなら、今行動すべきです。",
        answer: "If you are worried about the future you should act now",
        choices: ["If", "you", "are", "worried", "about", "the", "future", "you", "should", "act", "now", "because"],
        hint: "worried about（〜を心配している）"
    },
    {
        id: 26,
        text: "もしあなたが満足なら、私は嬉しいです。",
        answer: "I am happy if you are satisfied",
        choices: ["I", "am", "happy", "if", "you", "are", "satisfied", "so"],
        hint: "satisfied（満足した）"
    },
    {
        id: 27,
        text: "もし彼が真実を知れば、彼は驚くでしょう。",
        answer: "If he knows the truth he will be surprised",
        choices: ["If", "he", "knows", "the", "truth", "he", "will", "be", "surprised", "because"],
        hint: "truth（真実）/ surprised（驚いた）"
    },
    {
        id: 28,
        text: "もし予約をしたいなら、オンラインでできますよ。",
        answer: "You can do it online if you want to make a reservation",
        choices: ["You", "can", "do", "it", "online", "if", "you", "want", "to", "make", "a", "reservation", "so"],
        hint: "make a reservation（予約する）"
    },
    {
        id: 29,
        text: "もしあなたが一生懸命努力すれば、夢は叶います。",
        answer: "If you make an effort your dream will come true",
        choices: ["If", "you", "make", "an", "effort", "your", "dream", "will", "come", "true", "because"],
        hint: "make an effort（努力する）/ come true（叶う）"
    },
    {
        id: 30,
        text: "もし空腹なら、冷蔵庫に軽食がありますよ。",
        answer: "There are some snacks in the fridge if you are hungry",
        choices: ["There", "are", "some", "snacks", "in", "the", "fridge", "if", "you", "are", "hungry", "so"],
        hint: "fridge（冷蔵庫）/ snack（軽食）"
    },

    // ==========================================
    // 【C】語順整序（元の並べ替え問題を日本語ヒント付きで）
    // ==========================================
    {
        id: 31,
        text: "彼女はとても自信があるので、成功するでしょう。",
        answer: "She will succeed because she is very confident",
        choices: ["She", "will", "succeed", "because", "she", "is", "very", "confident", "if"],
        hint: "succeed（成功する）/ confident（自信がある）"
    },
    {
        id: 32,
        text: "もし場所がわからないなら、地図を使ってください。",
        answer: "Use a map if you don't know the location",
        choices: ["Use", "a", "map", "if", "you", "don't", "know", "the", "location", "so"],
        hint: "location（場所、位置）"
    },
    {
        id: 33,
        text: "彼は秘密を守れなかったので、彼女は怒っていました。",
        answer: "She was angry because he couldn't keep a secret",
        choices: ["She", "was", "angry", "because", "he", "couldn't", "keep", "a", "secret", "if"],
        hint: "keep a secret（秘密を守る）"
    },
    {
        id: 34,
        text: "もし気分が悪いなら、帰宅してもいいですよ。",
        answer: "You can go home if you feel sick",
        choices: ["You", "can", "go", "home", "if", "you", "feel", "sick", "because"],
        hint: "feel sick（気分が悪い）"
    },
    {
        id: 35,
        text: "今日は休日なので、美術館は混んでいます。",
        answer: "The museum is crowded because today is a holiday",
        choices: ["The", "museum", "is", "crowded", "because", "today", "is", "a", "holiday", "so"],
        hint: "crowded（混雑している）"
    },
    {
        id: 36,
        text: "もし決心がついたら、教えてください。",
        answer: "Please tell me if you make up your mind",
        choices: ["Please", "tell", "me", "if", "you", "make", "up", "your", "mind", "because"],
        hint: "make up one's mind（決心する）"
    },
    {
        id: 37,
        text: "彼女は風邪をひいていたので、学校を欠席しました。",
        answer: "She was absent from school because she had a cold",
        choices: ["She", "was", "absent", "from", "school", "because", "she", "had", "a", "cold", "if"],
        hint: "be absent from（〜を欠席する）"
    },
    {
        id: 38,
        text: "もし改善が必要なら、私たちがやります。",
        answer: "We will do it if improvement is necessary",
        choices: ["We", "will", "do", "it", "if", "improvement", "is", "necessary", "so"],
        hint: "improvement（改善）/ necessary（必要な）"
    },
    {
        id: 39,
        text: "彼はとても面白いので、みんなに人気があります。",
        answer: "He is popular with everyone because he is very funny",
        choices: ["He", "is", "popular", "with", "everyone", "because", "he", "is", "very", "funny", "if"],
        hint: "be popular with（〜に人気がある）"
    },
    {
        id: 40,
        text: "もし質問があれば、遠慮なく尋ねてください。",
        answer: "Don't hesitate to ask if you have questions",
        choices: ["Don't", "hesitate", "to", "ask", "if", "you", "have", "questions", "because"],
        hint: "hesitate（ためらう、遠慮する）"
    },

    // ==========================================
    // 【D】日本語から英語へ（総仕上げ）
    // ==========================================
    {
        id: 41,
        text: "交通機関が複雑なので、私は迷いました。",
        answer: "I got lost because the transportation was complicated",
        choices: ["I", "got", "lost", "because", "the", "transportation", "was", "complicated", "so"],
        hint: "transportation（交通機関）/ complicated（複雑な）"
    },
    {
        id: 42,
        text: "もし宝くじに当たったら、世界中を旅行します。",
        answer: "I'll travel around the world if I win the lottery",
        choices: ["I'll", "travel", "around", "the", "world", "if", "I", "win", "the", "lottery", "because"],
        hint: "win the lottery（宝くじに当たる）"
    },
    {
        id: 43,
        text: "彼は毎日運動しているので、とても健康です。",
        answer: "He is very healthy because he exercises every day",
        choices: ["He", "is", "very", "healthy", "because", "he", "exercises", "every", "day", "if"],
        hint: "exercise（運動する）"
    },
    {
        id: 44,
        text: "もしパスワードを忘れたら、リセットできます。",
        answer: "You can reset it if you forget your password",
        choices: ["You", "can", "reset", "it", "if", "you", "forget", "your", "password", "so"],
        hint: "reset（リセットする、再設定する）"
    },
    {
        id: 45,
        text: "空が暗かったので、彼は傘を持って行きました。",
        answer: "He took an umbrella because the sky was dark",
        choices: ["He", "took", "an", "umbrella", "because", "the", "sky", "was", "dark", "if"],
        hint: "take an umbrella（傘を持っていく）"
    },
    {
        id: 46,
        text: "もしあなたがアドバイスを必要なら、彼に電話しなさい。",
        answer: "Call him if you need some advice",
        choices: ["Call", "him", "if", "you", "need", "some", "advice", "because"],
        hint: "advice（アドバイス、助言）※不加算名詞"
    },
    {
        id: 47,
        text: "彼は一生懸命準備をしたので、プレゼンはうまくいきました。",
        answer: "The presentation went well because he prepared hard",
        choices: ["The", "presentation", "went", "well", "because", "he", "prepared", "hard", "if"],
        hint: "go well（うまくいく）/ prepare（準備する）"
    },
    {
        id: 48,
        text: "もし可能なら、明日お会いしたいです。",
        answer: "I'd like to see you tomorrow if possible",
        choices: ["I'd", "like", "to", "see", "you", "tomorrow", "if", "possible", "so"],
        hint: "if possible（もし可能なら）"
    },
    {
        id: 49,
        text: "たくさんのことを学べるので、読書は素晴らしいです。",
        answer: "Reading is great because you can learn many things",
        choices: ["Reading", "is", "great", "because", "you", "can", "learn", "many", "things", "if"],
        hint: "reading（読書）"
    },
    {
        id: 50,
        text: "もし準備ができたら、出発しましょう。",
        answer: "Let's leave if you are ready",
        choices: ["Let's", "leave", "if", "you", "are", "ready", "because"],
        hint: "leave（出発する、去る）"
    }
];