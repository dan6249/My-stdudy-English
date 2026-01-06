// chapter15.js
// 過去形・整序問題 (全50問)

const chapter15 = [
    // ==========================================
    // 【A】規則動詞（肯定文）
    // ==========================================
    {
        id: 1,
        text: "私は昨日、サッカーをしました。",
        answer: "I played soccer yesterday",
        choices: ["I", "played", "soccer", "yesterday", "play", "plays"],
        hint: "play + ed"
    },
    {
        id: 2,
        text: "彼女は昨夜、テレビを見ました。",
        answer: "She watched TV last night",
        choices: ["She", "watched", "TV", "last", "night", "watch"],
        hint: "watch + ed"
    },
    {
        id: 3,
        text: "私たちは昼食を作りました。",
        answer: "We cooked lunch",
        choices: ["We", "cooked", "lunch", "cook", "cooking"],
        hint: "cook + ed"
    },
    {
        id: 4,
        text: "彼は英語を一生懸命勉強しました。",
        answer: "He studied English hard",
        choices: ["He", "studied", "English", "hard", "study", "studies"],
        hint: "study -> studied"
    },
    {
        id: 5,
        text: "彼らはその部屋を掃除しました。",
        answer: "They cleaned the room",
        choices: ["They", "cleaned", "the", "room", "clean", "cleans"],
        hint: "clean + ed"
    },
    {
        id: 6,
        text: "私は音楽を楽しみました。",
        answer: "I enjoyed the music",
        choices: ["I", "enjoyed", "the", "music", "enjoy", "playing"],
        hint: "enjoy + ed"
    },
    {
        id: 7,
        text: "トムは東京に住んでいました。",
        answer: "Tom lived in Tokyo",
        choices: ["Tom", "lived", "in", "Tokyo", "live", "lives"],
        hint: "live + d"
    },
    {
        id: 8,
        text: "彼女はテニスを練習しました。",
        answer: "She practiced tennis",
        choices: ["She", "practiced", "tennis", "practice", "practices"],
        hint: "practice + d"
    },
    {
        id: 9,
        text: "私たちはその店を訪れました。",
        answer: "We visited the shop",
        choices: ["We", "visited", "the", "shop", "visit", "go"],
        hint: "visit + ed"
    },
    {
        id: 10,
        text: "雨が降りました。",
        answer: "It rained",
        choices: ["It", "rained", "rain", "rains", "is"],
        hint: "天気はItで始める"
    },

    // ==========================================
    // 【B】不規則動詞（肯定文）
    // ==========================================
    {
        id: 11,
        text: "私は公園に行きました。",
        answer: "I went to the park",
        choices: ["I", "went", "to", "the", "park", "go"],
        hint: "go -> went"
    },
    {
        id: 12,
        text: "彼女は新しい車を買いました。",
        answer: "She bought a new car",
        choices: ["She", "bought", "a", "new", "car", "buy"],
        hint: "buy -> bought"
    },
    {
        id: 13,
        text: "彼はその映画を見ました。",
        answer: "He saw the movie",
        choices: ["He", "saw", "the", "movie", "see", "sees"],
        hint: "see -> saw"
    },
    {
        id: 14,
        text: "私たちは楽しい時を過ごしました。",
        answer: "We had a good time",
        choices: ["We", "had", "a", "good", "time", "have"],
        hint: "have -> had"
    },
    {
        id: 15,
        text: "ケンは私の家に来ました。",
        answer: "Ken came to my house",
        choices: ["Ken", "came", "to", "my", "house", "come"],
        hint: "come -> came"
    },
    {
        id: 16,
        text: "私は今朝、早く起きました。",
        answer: "I got up early this morning",
        choices: ["I", "got", "up", "early", "this", "morning", "get"],
        hint: "get -> got"
    },
    {
        id: 17,
        text: "彼女はリンゴを食べました。",
        answer: "She ate an apple",
        choices: ["She", "ate", "an", "apple", "eat", "eats"],
        hint: "eat -> ate"
    },
    {
        id: 18,
        text: "彼は素晴らしい写真を撮りました。",
        answer: "He took a nice picture",
        choices: ["He", "took", "a", "nice", "picture", "take"],
        hint: "take -> took"
    },
    {
        id: 19,
        text: "私たちはその本を読みました。",
        answer: "We read the book",
        choices: ["We", "read", "the", "book", "reading", "reads"],
        hint: "read（発音はレッド）"
    },
    {
        id: 20,
        text: "彼らは英語を話しました。",
        answer: "They spoke English",
        choices: ["They", "spoke", "English", "speak", "speaks", "spokes"],
        hint: "speak -> spoke"
    },

    // ==========================================
    // 【C】Be動詞の過去形（was / were）
    // ==========================================
    {
        id: 21,
        text: "私は忙しかったです。",
        answer: "I was busy",
        choices: ["I", "was", "busy", "am", "were"],
        hint: "am -> was"
    },
    {
        id: 22,
        text: "彼女は先生でした。",
        answer: "She was a teacher",
        choices: ["She", "was", "a", "teacher", "is", "were"],
        hint: "is -> was"
    },
    {
        id: 23,
        text: "私たちは幸せでした。",
        answer: "We were happy",
        choices: ["We", "were", "happy", "are", "was"],
        hint: "are -> were"
    },
    {
        id: 24,
        text: "彼らは親切でした。",
        answer: "They were kind",
        choices: ["They", "were", "kind", "are", "was"],
        hint: "are -> were"
    },
    {
        id: 25,
        text: "昨日は寒かったです。",
        answer: "It was cold yesterday",
        choices: ["It", "was", "cold", "yesterday", "is", "were"],
        hint: "天気はItで、is -> was"
    },
    {
        id: 26,
        text: "あなたは学生でした。",
        answer: "You were a student",
        choices: ["You", "were", "a", "student", "are", "was"],
        hint: "are -> were"
    },
    {
        id: 27,
        text: "その本は面白かったです。",
        answer: "The book was interesting",
        choices: ["The", "book", "was", "interesting", "is", "were"],
        hint: "is -> was"
    },
    {
        id: 28,
        text: "ケンとマイクは友達でした。",
        answer: "Ken and Mike were friends",
        choices: ["Ken", "and", "Mike", "were", "friends", "was"],
        hint: "複数は were"
    },
    {
        id: 29,
        text: "私はその時、部屋にいました。",
        answer: "I was in the room then",
        choices: ["I", "was", "in", "the", "room", "then", "am"],
        hint: "いる -> was"
    },
    {
        id: 30,
        text: "彼らは公園にいました。",
        answer: "They were in the park",
        choices: ["They", "were", "in", "the", "park", "was", "are"],
        hint: "いる -> were"
    },

    // ==========================================
    // 【D】否定文（didn't / wasn't / weren't）
    // ==========================================
    {
        id: 31,
        text: "私はテレビを見ませんでした。",
        answer: "I didn't watch TV",
        choices: ["I", "didn't", "watch", "TV", "watched", "don't"],
        hint: "didn't + 原形"
    },
    {
        id: 32,
        text: "彼女は学校に行きませんでした。",
        answer: "She didn't go to school",
        choices: ["She", "didn't", "go", "to", "school", "went"],
        hint: "didn't + 原形"
    },
    {
        id: 33,
        text: "彼は夕食を食べませんでした。",
        answer: "He didn't eat dinner",
        choices: ["He", "didn't", "eat", "dinner", "ate", "doesn't"],
        hint: "didn't + 原形"
    },
    {
        id: 34,
        text: "私たちはテニスをしませんでした。",
        answer: "We didn't play tennis",
        choices: ["We", "didn't", "play", "tennis", "played", "don't"],
        hint: "didn't + 原形"
    },
    {
        id: 35,
        text: "私は忙しくありませんでした。",
        answer: "I was not busy",
        choices: ["I", "was", "not", "busy", "did", "didn't"],
        hint: "was not"
    },
    {
        id: 36,
        text: "その映画は面白くありませんでした。",
        answer: "The movie was not interesting",
        choices: ["The", "movie", "was", "not", "interesting", "did"],
        hint: "was not"
    },
    {
        id: 37,
        text: "彼らは家にいませんでした。",
        answer: "They were not at home",
        choices: ["They", "were", "not", "at", "home", "did"],
        hint: "were not"
    },
    {
        id: 38,
        text: "トムは昨日、来ませんでした。",
        answer: "Tom didn't come yesterday",
        choices: ["Tom", "didn't", "come", "yesterday", "came", "wasn't"],
        hint: "didn't + 原形"
    },
    {
        id: 39,
        text: "私はそれを知りませんでした。",
        answer: "I didn't know that",
        choices: ["I", "didn't", "know", "that", "knew", "wasn't"],
        hint: "know(知る)"
    },
    {
        id: 40,
        text: "彼女は歌いませんでした。",
        answer: "She didn't sing",
        choices: ["She", "didn't", "sing", "sang", "wasn't", "not"],
        hint: "sing(歌う)"
    },

    // ==========================================
    // 【E】疑問文（Did ...? / Was ...? / 疑問詞）
    // ==========================================
    {
        id: 41,
        text: "あなたはテニスをしましたか？",
        answer: "Did you play tennis",
        choices: ["Did", "you", "play", "tennis", "Do", "played"],
        hint: "Did + 主語 + 原形"
    },
    {
        id: 42,
        text: "彼女はここに来ましたか？",
        answer: "Did she come here",
        choices: ["Did", "she", "come", "here", "came", "Does"],
        hint: "Did + 主語 + 原形"
    },
    {
        id: 43,
        text: "彼はその本を読みましたか？",
        answer: "Did he read the book",
        choices: ["Did", "he", "read", "the", "book", "reads"],
        hint: "Did + 主語 + 原形"
    },
    {
        id: 44,
        text: "あなたは忙しかったですか？",
        answer: "Were you busy",
        choices: ["Were", "you", "busy", "Did", "Was"],
        hint: "Be動詞の疑問文（YouなのでWere）"
    },
    {
        id: 45,
        text: "昨日は晴れでしたか？",
        answer: "Was it sunny yesterday",
        choices: ["Was", "it", "sunny", "yesterday", "Did", "Were"],
        hint: "Be動詞(It)の疑問文"
    },
    {
        id: 46,
        text: "あなたは何を買いましたか？",
        answer: "What did you buy",
        choices: ["What", "did", "you", "buy", "bought", "do"],
        hint: "What + did ..."
    },
    {
        id: 47,
        text: "彼女はどこに行きましたか？",
        answer: "Where did she go",
        choices: ["Where", "did", "she", "go", "went", "does"],
        hint: "Where + did ..."
    },
    {
        id: 48,
        text: "あなたはいつそれを食べましたか？",
        answer: "When did you eat it",
        choices: ["When", "did", "you", "eat", "it", "ate"],
        hint: "When + did ..."
    },
    {
        id: 49,
        text: "誰がそのケーキを作りましたか？",
        answer: "Who made the cake",
        choices: ["Who", "made", "the", "cake", "did", "make"],
        hint: "Whoが主語の時はそのまま過去形"
    },
    {
        id: 50,
        text: "あなたの夏休みはどうでしたか？",
        answer: "How was your summer vacation",
        choices: ["How", "was", "your", "summer", "vacation", "did"],
        hint: "How was ..."
    }
];