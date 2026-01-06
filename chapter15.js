// chapter15.js
// 過去形・整序問題 (全50問) - 改訂版

const chapter15 = [
    // ==========================================
    // 【A】規則動詞（肯定文）
    // ==========================================
    {
        id: 1,
        text: "兄は先週、野球をしました。",
        answer: "My brother played baseball last week",
        choices: ["My", "brother", "played", "baseball", "last", "week", "play"],
        hint: "play + ed"
    },
    {
        id: 2,
        text: "私たちは昨日、その映画を見ました。",
        answer: "We watched the movie yesterday",
        choices: ["We", "watched", "the", "movie", "yesterday", "watch", "watches"],
        hint: "watch + ed"
    },
    {
        id: 3,
        text: "母は夕食を作りました。",
        answer: "My mother cooked dinner",
        choices: ["My", "mother", "cooked", "dinner", "cook", "cooking"],
        hint: "cook + ed"
    },
    {
        id: 4,
        text: "私は昨日、数学を勉強しました。",
        answer: "I studied math yesterday",
        choices: ["I", "studied", "math", "yesterday", "study", "studies"],
        hint: "study -> studied (yをiに変えてed)"
    },
    {
        id: 5,
        text: "彼は自分の車を洗いました。",
        answer: "He washed his car",
        choices: ["He", "washed", "his", "car", "wash", "washes"],
        hint: "wash + ed"
    },
    {
        id: 6,
        text: "彼女はそのパーティーを楽しみました。",
        answer: "She enjoyed the party",
        choices: ["She", "enjoyed", "the", "party", "enjoy", "enjoys"],
        hint: "enjoy + ed"
    },
    {
        id: 7,
        text: "私の祖母は京都に住んでいました。",
        answer: "My grandmother lived in Kyoto",
        choices: ["My", "grandmother", "lived", "in", "Kyoto", "live", "lives"],
        hint: "live + d"
    },
    {
        id: 8,
        text: "私たちは放課後、ピアノを練習しました。",
        answer: "We practiced the piano after school",
        choices: ["We", "practiced", "the", "piano", "after", "school", "practice"],
        hint: "practice + d"
    },
    {
        id: 9,
        text: "彼らは博物館を訪れました。",
        answer: "They visited the museum",
        choices: ["They", "visited", "the", "museum", "visit", "visiting"],
        hint: "visit + ed"
    },
    {
        id: 10,
        text: "雪が降りました。",
        answer: "It snowed",
        choices: ["It", "snowed", "snow", "snows", "is"],
        hint: "天気はItで始める"
    },

    // ==========================================
    // 【B】不規則動詞（肯定文）
    // ==========================================
    {
        id: 11,
        text: "彼女は図書館に行きました。",
        answer: "She went to the library",
        choices: ["She", "went", "to", "the", "library", "go", "goes"],
        hint: "go -> went"
    },
    {
        id: 12,
        text: "父は新しい自転車を買いました。",
        answer: "My father bought a new bike",
        choices: ["My", "father", "bought", "a", "new", "bike", "buy"],
        hint: "buy -> bought"
    },
    {
        id: 13,
        text: "私は昨日、美しい鳥を見ました。",
        answer: "I saw a beautiful bird yesterday",
        choices: ["I", "saw", "a", "beautiful", "bird", "yesterday", "see"],
        hint: "see -> saw"
    },
    {
        id: 14,
        text: "彼は忙しい一日を過ごしました（持ちました）。",
        answer: "He had a busy day",
        choices: ["He", "had", "a", "busy", "day", "have", "has"],
        hint: "have -> had"
    },
    {
        id: 15,
        text: "そのバスは遅れて来ました。",
        answer: "The bus came late",
        choices: ["The", "bus", "came", "late", "come", "comes"],
        hint: "come -> came"
    },
    {
        id: 16,
        text: "私たちは6時に起きました。",
        answer: "We got up at six",
        choices: ["We", "got", "up", "at", "six", "get", "gets"],
        hint: "get -> got"
    },
    {
        id: 17,
        text: "彼らは昼食にサンドイッチを食べました。",
        answer: "They ate sandwiches for lunch",
        choices: ["They", "ate", "sandwiches", "for", "lunch", "eat", "eats"],
        hint: "eat -> ate"
    },
    {
        id: 18,
        text: "メアリーはたくさんの写真を撮りました。",
        answer: "Mary took many pictures",
        choices: ["Mary", "took", "many", "pictures", "take", "takes"],
        hint: "take -> took"
    },
    {
        id: 19,
        text: "私は昨夜、面白い本を読みました。",
        answer: "I read an interesting book last night",
        choices: ["I", "read", "an", "interesting", "book", "last", "night", "reading"],
        hint: "read（過去形の読みはレッド）"
    },
    {
        id: 20,
        text: "先生は私たちに日本語を話しました。",
        answer: "The teacher spoke Japanese to us",
        choices: ["The", "teacher", "spoke", "Japanese", "to", "us", "speak"],
        hint: "speak -> spoke"
    },

    // ==========================================
    // 【C】Be動詞の過去形（was / were）
    // ==========================================
    {
        id: 21,
        text: "私は昨日、お腹が空いていました。",
        answer: "I was hungry yesterday",
        choices: ["I", "was", "hungry", "yesterday", "am", "were"],
        hint: "am -> was"
    },
    {
        id: 22,
        text: "彼は有名な医者でした。",
        answer: "He was a famous doctor",
        choices: ["He", "was", "a", "famous", "doctor", "is", "were"],
        hint: "is -> was"
    },
    {
        id: 23,
        text: "私たちはその試合に興奮しました。",
        answer: "We were excited about the game",
        choices: ["We", "were", "excited", "about", "the", "game", "was"],
        hint: "are -> were"
    },
    {
        id: 24,
        text: "彼らはとても眠そうでした。",
        answer: "They were very sleepy",
        choices: ["They", "were", "very", "sleepy", "are", "was"],
        hint: "are -> were"
    },
    {
        id: 25,
        text: "昨夜は暑かったです。",
        answer: "It was hot last night",
        choices: ["It", "was", "hot", "last", "night", "is", "were"],
        hint: "天気・気候のIt"
    },
    {
        id: 26,
        text: "あなたは昨日、遅刻しましたね。",
        answer: "You were late yesterday",
        choices: ["You", "were", "late", "yesterday", "are", "was"],
        hint: "are -> were"
    },
    {
        id: 27,
        text: "その質問は難しかったです。",
        answer: "The question was difficult",
        choices: ["The", "question", "was", "difficult", "is", "were"],
        hint: "is -> was"
    },
    {
        id: 28,
        text: "その犬と猫は良い友達でした。",
        answer: "The dog and the cat were good friends",
        choices: ["The", "dog", "and", "the", "cat", "were", "good", "friends", "was"],
        hint: "主語が複数なので were"
    },
    {
        id: 29,
        text: "私はその時、キッチンにいました。",
        answer: "I was in the kitchen then",
        choices: ["I", "was", "in", "the", "kitchen", "then", "am"],
        hint: "いる -> was"
    },
    {
        id: 30,
        text: "子供たちは学校にいました。",
        answer: "The children were at school",
        choices: ["The", "children", "were", "at", "school", "was", "is"],
        hint: "children(複数) -> were"
    },

    // ==========================================
    // 【D】否定文（didn't / wasn't / weren't）
    // ==========================================
    {
        id: 31,
        text: "私はそのニュースを見ませんでした。",
        answer: "I didn't watch the news",
        choices: ["I", "didn't", "watch", "the", "news", "watched", "don't"],
        hint: "didn't + 原形"
    },
    {
        id: 32,
        text: "彼女は昨日、外出しませんでした。",
        answer: "She didn't go out yesterday",
        choices: ["She", "didn't", "go", "out", "yesterday", "went", "doesn't"],
        hint: "didn't + 原形"
    },
    {
        id: 33,
        text: "彼は朝食を食べませんでした。",
        answer: "He didn't eat breakfast",
        choices: ["He", "didn't", "eat", "breakfast", "ate", "doesn't"],
        hint: "didn't + 原形"
    },
    {
        id: 34,
        text: "私たちはその手紙を書きませんでした。",
        answer: "We didn't write the letter",
        choices: ["We", "didn't", "write", "the", "letter", "wrote", "don't"],
        hint: "didn't + 原形"
    },
    {
        id: 35,
        text: "私は昨日、病気ではありませんでした。",
        answer: "I was not sick yesterday",
        choices: ["I", "was", "not", "sick", "yesterday", "did", "didn't"],
        hint: "was not"
    },
    {
        id: 36,
        text: "その話は本当ではありませんでした。",
        answer: "The story was not true",
        choices: ["The", "story", "was", "not", "true", "did", "were"],
        hint: "was not"
    },
    {
        id: 37,
        text: "彼らは教室にいませんでした。",
        answer: "They were not in the classroom",
        choices: ["They", "were", "not", "in", "the", "classroom", "did"],
        hint: "were not"
    },
    {
        id: 38,
        text: "雨は止みませんでした。",
        answer: "The rain didn't stop",
        choices: ["The", "rain", "didn't", "stop", "stopped", "wasn't"],
        hint: "didn't + 原形"
    },
    {
        id: 39,
        text: "私はその歌を知りませんでした。",
        answer: "I didn't know the song",
        choices: ["I", "didn't", "know", "the", "song", "knew", "wasn't"],
        hint: "know(知る)"
    },
    {
        id: 40,
        text: "彼女はバッグを持っていませんでした。",
        answer: "She didn't have a bag",
        choices: ["She", "didn't", "have", "a", "bag", "had", "wasn't"],
        hint: "have(持っている)の否定"
    },

    // ==========================================
    // 【E】疑問文（Did ...? / Was ...? / 疑問詞）
    // ==========================================
    {
        id: 41,
        text: "あなたはお母さんを手伝いましたか？",
        answer: "Did you help your mother",
        choices: ["Did", "you", "help", "your", "mother", "Do", "helped"],
        hint: "Did + 主語 + 原形"
    },
    {
        id: 42,
        text: "彼女はピアノを弾きましたか？",
        answer: "Did she play the piano",
        choices: ["Did", "she", "play", "the", "piano", "played", "Does"],
        hint: "Did + 主語 + 原形"
    },
    {
        id: 43,
        text: "彼は宿題を終わらせましたか？",
        answer: "Did he finish his homework",
        choices: ["Did", "he", "finish", "his", "homework", "finished"],
        hint: "Did + 主語 + 原形"
    },
    {
        id: 44,
        text: "あなたは自由（暇）でしたか？",
        answer: "Were you free",
        choices: ["Were", "you", "free", "Did", "Was", "Are"],
        hint: "Be動詞の疑問文"
    },
    {
        id: 45,
        text: "昨日は曇りでしたか？",
        answer: "Was it cloudy yesterday",
        choices: ["Was", "it", "cloudy", "yesterday", "Did", "Were"],
        hint: "Be動詞(It)の疑問文"
    },
    {
        id: 46,
        text: "彼は何を勉強しましたか？",
        answer: "What did he study",
        choices: ["What", "did", "he", "study", "studied", "do"],
        hint: "What + did ..."
    },
    {
        id: 47,
        text: "あなたはどこに住んでいましたか？",
        answer: "Where did you live",
        choices: ["Where", "did", "you", "live", "lived", "does"],
        hint: "Where + did ..."
    },
    {
        id: 48,
        text: "彼女はいつ帰宅しましたか？",
        answer: "When did she come home",
        choices: ["When", "did", "she", "come", "home", "came"],
        hint: "When + did ..."
    },
    {
        id: 49,
        text: "誰がその窓を割りましたか？",
        answer: "Who broke the window",
        choices: ["Who", "broke", "the", "window", "did", "break"],
        hint: "Whoが主語の時はそのまま過去形"
    },
    {
        id: 50,
        text: "その映画はどうでしたか？",
        answer: "How was the movie",
        choices: ["How", "was", "the", "movie", "did", "were"],
        hint: "How was ..."
    }
];