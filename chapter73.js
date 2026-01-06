// chapter73.js
// 接続詞のマスター：if（条件）と because（理由） 演習50問

const chapter73 = [
    // ==========================================
    // 【A】because を使った「理由・原因」の表現
    // ==========================================
    {
        id: 1,
        text: "雪が降っていたので、彼は家にとどまりました。",
        answer: "He stayed home because it was snowing",
        choices: ["He", "stayed", "home", "because", "it", "was", "snowing", "if"],
        hint: "because（〜なので）を使って理由を後ろに置きます"
    },
    {
        id: 2,
        text: "この映画は感動的なので、私は大好きです。",
        answer: "I love this movie because it is touching",
        choices: ["I", "love", "this", "movie", "because", "it", "is", "touching", "if"],
        hint: "touching（感動的な）"
    },
    {
        id: 3,
        text: "重い荷物を持っているので、彼女は手助けが必要です。",
        answer: "She needs help because she is carrying heavy bags",
        choices: ["She", "needs", "help", "because", "she", "is", "carrying", "heavy", "bags", "so"],
        hint: "carry（〜を運ぶ・持っている）"
    },
    {
        id: 4,
        text: "昨夜は夜更かしをしたので、私はとても眠いです。",
        answer: "I am very sleepy because I stayed up late last night",
        choices: ["I", "am", "very", "sleepy", "because", "I", "stayed", "up", "late", "last", "night", "if"],
        hint: "stay up late（夜更かしする）"
    },
    {
        id: 5,
        text: "時間とお金を節約できるので、彼は自炊をしています。",
        answer: "He cooks for himself because it saves time and money",
        choices: ["He", "cooks", "for", "himself", "because", "it", "saves", "time", "and", "money", "so"],
        hint: "save（節約する・省く）"
    },
    {
        id: 6,
        text: "サービスが素晴らしいので、このレストランは有名です。",
        answer: "This restaurant is famous because the service is excellent",
        choices: ["This", "restaurant", "is", "famous", "because", "the", "service", "is", "excellent", "if"],
        hint: "excellent（極めて優れた）"
    },
    {
        id: 7,
        text: "鍵を忘れたので、彼女は家に入れませんでした。",
        answer: "She couldn't enter the house because she forgot the key",
        choices: ["She", "couldn't", "enter", "the", "house", "because", "she", "forgot", "the", "key", "when"],
        hint: "couldn't（〜できなかった）"
    },
    {
        id: 8,
        text: "彼はとても親切なので、みんなに信頼されています。",
        answer: "He is trusted by everyone because he is very kind",
        choices: ["He", "is", "trusted", "by", "everyone", "because", "he", "is", "very", "kind", "if"],
        hint: "trust（信頼する）の受動態です"
    },
    {
        id: 9,
        text: "雨が降りそうだったので、私たちはハイキングを諦めました。",
        answer: "We gave up hiking because it looked like rain",
        choices: ["We", "gave", "up", "hiking", "because", "it", "looked", "like", "rain", "when"],
        hint: "give up（諦める・断念する）"
    },
    {
        id: 10,
        text: "彼は賢いので、その問題を解くことができました。",
        answer: "He could solve the problem because he is smart",
        choices: ["He", "could", "solve", "the", "problem", "because", "he", "is", "smart", "so"],
        hint: "solve（解決する・解く）"
    },
    {
        id: 11,
        text: "お腹が空いていたので、彼はサンドイッチを作りました。",
        answer: "He made a sandwich because he was hungry",
        choices: ["He", "made", "a", "sandwich", "because", "he", "was", "hungry", "if"],
        hint: "hungry（空腹の）"
    },
    {
        id: 12,
        text: "試験に合格したので、彼女は幸せでした。",
        answer: "She was happy because she passed the exam",
        choices: ["She", "was", "happy", "because", "she", "passed", "the", "exam", "so"],
        hint: "pass the exam（試験に合格する）"
    },
    {
        id: 13,
        text: "運動をしたいので、彼はジムに通っています。",
        answer: "He goes to the gym because he wants to exercise",
        choices: ["He", "goes", "to", "the", "gym", "because", "he", "wants", "to", "exercise", "if"],
        hint: "exercise（運動する）"
    },
    {
        id: 14,
        text: "窓が開いていたので、私は寒さを感じました。",
        answer: "I felt cold because the window was open",
        choices: ["I", "felt", "cold", "because", "the", "window", "was", "open", "so"],
        hint: "felt（feelの過去形）"
    },
    {
        id: 15,
        text: "彼は英語が上手なので、翻訳者として働いています。",
        answer: "He works as a translator because he is good at English",
        choices: ["He", "works", "as", "a", "translator", "because", "he", "is", "good", "at", "English", "if"],
        hint: "be good at（〜が得意だ）"
    },

    // ==========================================
    // 【B】if を使った「条件・仮定」の表現
    // ==========================================
    {
        id: 16,
        text: "もし助けが必要なら、いつでも呼んでください。",
        answer: "Please call me anytime if you need help",
        choices: ["Please", "call", "me", "anytime", "if", "you", "need", "help", "because"],
        hint: "if（もし〜なら）を使って条件を後ろに置きます"
    },
    {
        id: 17,
        text: "もし何か質問があれば、手を挙げてください。",
        answer: "If you have any questions please raise your hand",
        choices: ["If", "you", "have", "any", "questions", "please", "raise", "your", "hand", "because"],
        hint: "raise your hand（手を挙げる）"
    },
    {
        id: 18,
        text: "もし嫌でなければ、窓を閉めてもいいですよ。",
        answer: "You can close the window if you don't mind",
        choices: ["You", "can", "close", "the", "window", "if", "you", "don't", "mind", "so"],
        hint: "if you don't mind（もしよろしければ・差し支えなければ）"
    },
    {
        id: 19,
        text: "もしチケットが売り切れなら、私たちは行けません。",
        answer: "If the tickets are sold out we can't go",
        choices: ["If", "the", "tickets", "are", "sold", "out", "we", "can't", "go", "because"],
        hint: "sold out（売り切れ）"
    },
    {
        id: 20,
        text: "もし暇なら、一緒に買い物に行きませんか。",
        answer: "Would you like to go shopping if you are free",
        choices: ["Would", "you", "like", "to", "go", "shopping", "if", "you", "are", "free", "so"],
        hint: "be free（時間がある・暇だ）"
    },
    {
        id: 21,
        text: "もし気分が良くなければ、休んだほうがいいです。",
        answer: "If you don't feel well you should rest",
        choices: ["If", "you", "don't", "feel", "well", "you", "should", "rest", "because"],
        hint: "don't feel well（気分が良くない）"
    },
    {
        id: 22,
        text: "もし彼が来れば、会議を始めることができます。",
        answer: "We can start the meeting if he comes",
        choices: ["We", "can", "start", "the", "meeting", "if", "he", "comes", "so"],
        hint: "if節の中では、未来のことでも現在形を使います"
    },
    {
        id: 23,
        text: "もし道に迷ったら、警察に聞いてください。",
        answer: "If you get lost please ask the police",
        choices: ["If", "you", "get", "lost", "please", "ask", "the", "police", "because"],
        hint: "get lost（道に迷う）"
    },
    {
        id: 24,
        text: "もし彼女が忙しくなければ、手伝ってくれるでしょう。",
        answer: "She will help us if she is not busy",
        choices: ["She", "will", "help", "us", "if", "she", "is", "not", "busy", "so"],
        hint: "not busy（忙しくない）"
    },
    {
        id: 25,
        text: "もし塩が足りなければ、足してもいいですよ。",
        answer: "If there is not enough salt you can add some",
        choices: ["If", "there", "is", "not", "enough", "salt", "you", "can", "add", "some", "because"],
        hint: "add（加える・足す）"
    },
    {
        id: 26,
        text: "もし新しい情報が入ったら、お伝えします。",
        answer: "I will tell you if I get new information",
        choices: ["I", "will", "tell", "you", "if", "I", "get", "new", "information", "so"],
        hint: "information（情報）※不加算名詞です"
    },
    {
        id: 27,
        text: "もしこれが本当なら、大変なことになります。",
        answer: "If this is true it will be a big problem",
        choices: ["If", "this", "is", "true", "it", "will", "be", "a", "big", "problem", "because"],
        hint: "big problem（大きな問題）"
    },
    {
        id: 28,
        text: "もし宝くじに当たったら、何を買いますか？",
        answer: "What would you buy if you won the lottery",
        choices: ["What", "would", "you", "buy", "if", "you", "won", "the", "lottery", "so"],
        hint: "won the lottery（宝くじに当たった）※仮定法の形です"
    },
    {
        id: 29,
        text: "もしバスが時間通りに来れば、間に合います。",
        answer: "If the bus arrives on time we will be early enough",
        choices: ["If", "the", "bus", "arrives", "on", "time", "we", "will", "be", "early", "enough", "because"],
        hint: "on time（時間通りに）"
    },
    {
        id: 30,
        text: "もしお腹がいっぱいなら、残しても大丈夫です。",
        answer: "It is okay to leave it if you are full",
        choices: ["It", "is", "okay", "to", "leave", "it", "if", "you", "are", "full", "so"],
        hint: "full（満腹の）"
    },

    // ==========================================
    // 【C】文の組み立て（ because と if の使い分け）
    // ==========================================
    {
        id: 31,
        text: "彼は一生懸命練習したので、試合に勝ちました。",
        answer: "He won the game because he practiced hard",
        choices: ["He", "won", "the", "game", "because", "he", "practiced", "hard", "if"],
        hint: "won（winの過去形）"
    },
    {
        id: 32,
        text: "もし値段が安ければ、私はこれを買いたいです。",
        answer: "I want to buy this if the price is low",
        choices: ["I", "want", "to", "buy", "this", "if", "the", "price", "is", "low", "so"],
        hint: "price（価格）/ low（低い・安い）"
    },
    {
        id: 33,
        text: "彼女は約束を破ったので、彼は怒っています。",
        answer: "He is angry because she broke her promise",
        choices: ["He", "is", "angry", "because", "she", "broke", "her", "promise", "if"],
        hint: "break a promise（約束を破る）"
    },
    {
        id: 34,
        text: "もしあなたが賛成なら、私たちは始められます。",
        answer: "We can start if you agree with us",
        choices: ["We", "can", "start", "if", "you", "agree", "with", "us", "because"],
        hint: "agree with（〜に賛成・同意する）"
    },
    {
        id: 35,
        text: "渋滞していたので、彼はバスに乗るのをやめました。",
        answer: "He didn't take the bus because it was crowded",
        choices: ["He", "didn't", "take", "the", "bus", "because", "it", "was", "crowded", "so"],
        hint: "crowded（混雑している）"
    },
    {
        id: 36,
        text: "もし明日雨が降れば、試合は延期されます。",
        answer: "If it rains tomorrow the match will be postponed",
        choices: ["If", "it", "rains", "tomorrow", "the", "match", "will", "be", "postponed", "because"],
        hint: "postpone（延期する）"
    },
    {
        id: 37,
        text: "彼女は本を読むのが好きなので、図書館によく行きます。",
        answer: "She often goes to the library because she likes reading",
        choices: ["She", "often", "goes", "to", "the", "library", "because", "she", "likes", "reading", "if"],
        hint: "likes reading（読書が好き）"
    },
    {
        id: 38,
        text: "もしあなたが良ければ、映画を見に行きましょう。",
        answer: "Let's go to the movies if you like",
        choices: ["Let's", "go", "to", "the", "movies", "if", "you", "like", "so"],
        hint: "if you like（もしよろしければ・気が向けば）"
    },
    {
        id: 39,
        text: "風が強かったので、船は出港できませんでした。",
        answer: "The boat couldn't leave because the wind was strong",
        choices: ["The", "boat", "couldn't", "leave", "because", "the", "wind", "was", "strong", "if"],
        hint: "strong wind（強風）"
    },
    {
        id: 40,
        text: "もしアドバイスが必要なら、私に聞いてください。",
        answer: "Please ask me if you need some advice",
        choices: ["Please", "ask", "me", "if", "you", "need", "some", "advice", "because"],
        hint: "advice（助言）"
    },

    // ==========================================
    // 【D】総合演習（日本語から英語へ）
    // ==========================================
    {
        id: 41,
        text: "空腹だったので、私はピザを注文しました。",
        answer: "I ordered a pizza because I was hungry",
        choices: ["I", "ordered", "a", "pizza", "because", "I", "was", "hungry", "so"],
        hint: "order（注文する）"
    },
    {
        id: 42,
        text: "もし彼が間に合えば、一緒に夕食を食べます。",
        answer: "We will have dinner together if he is in time",
        choices: ["We", "will", "have", "dinner", "together", "if", "he", "is", "in", "time", "because"],
        hint: "in time（間に合って）"
    },
    {
        id: 43,
        text: "彼は疲れていたので、散歩には行きませんでした。",
        answer: "He didn't go for a walk because he was tired",
        choices: ["He", "didn't", "go", "for", "a", "walk", "because", "he", "was", "tired", "if"],
        hint: "go for a walk（散歩に行く）"
    },
    {
        id: 44,
        text: "もしパスポートを失くしたら、すぐに警察に行ってください。",
        answer: "Go to the police at once if you lose your passport",
        choices: ["Go", "to", "the", "police", "at", "once", "if", "you", "lose", "your", "passport", "so"],
        hint: "at once（すぐに・直ちに）"
    },
    {
        id: 45,
        text: "彼女は歌うのが大好きなので、歌手になりたいです。",
        answer: "She wants to be a singer because she loves singing",
        choices: ["She", "wants", "to", "be", "a", "singer", "because", "she", "loves", "singing", "if"],
        hint: "wants to be（〜になりたい）"
    },
    {
        id: 46,
        text: "もし何か間違っていたら、直してください。",
        answer: "Please correct it if something is wrong",
        choices: ["Please", "correct", "it", "if", "something", "is", "wrong", "because"],
        hint: "correct（訂正する・直す）"
    },
    {
        id: 47,
        text: "彼は非常に勇敢だったので、子供を助けました。",
        answer: "He saved the child because he was very brave",
        choices: ["He", "saved", "the", "child", "because", "he", "was", "very", "brave", "if"],
        hint: "brave（勇敢な）"
    },
    {
        id: 48,
        text: "もし彼女が明日来るなら、私は嬉しいです。",
        answer: "I will be happy if she comes tomorrow",
        choices: ["I", "will", "be", "happy", "if", "she", "comes", "tomorrow", "so"],
        hint: "条件を表すif節の中は現在形になります"
    },
    {
        id: 49,
        text: "暗かったので、彼はライトをつけました。",
        answer: "He turned on the light because it was dark",
        choices: ["He", "turned", "on", "the", "light", "because", "it", "was", "dark", "if"],
        hint: "turn on（（電気などを）つける）"
    },
    {
        id: 50,
        text: "もし準備ができたら、教えてください。",
        answer: "Please tell me if you are ready",
        choices: ["Please", "tell", "me", "if", "you", "are", "ready", "because"],
        hint: "ready（準備ができて）"
    }
];