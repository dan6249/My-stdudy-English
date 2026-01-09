// chapterWordOrder.js
const chapter01 = [
    // ==========================================
    // パターン1：基本の動作 (SVO)
    // ==========================================
    {
        id: 1,
        text: "私はテニスをします。",
        answer: "I play tennis",
        choices: ["I", "play", "tennis", "am"],
        hint: "主語(S) + 動詞(V) + 目的語(O)の配置",
        rhythm: [
            { word: "I", strong: false },      // 代名詞は弱
            { word: "play", strong: true },    // 一般動詞は強
            { word: "tennis", strong: true }   // 名詞は強
        ]
    },
    {
        id: 2,
        text: "彼女はリンゴを食べます。",
        answer: "She eats an apple",
        choices: ["She", "eats", "an", "apple", "is"],
        hint: "動詞の後に「何を」を配置する",
        rhythm: [
            { word: "She", strong: false },
            { word: "eats", strong: true },
            { word: "an", strong: false },     // 冠詞は弱
            { word: "apple", strong: true }
        ]
    },
    {
        id: 3,
        text: "私たちは映画を見ます。",
        answer: "We watch movies",
        choices: ["We", "watch", "movies", "are"],
        hint: "動作の対象(目的語)を動詞の直後に置く",
        rhythm: [
            { word: "We", strong: false },
            { word: "watch", strong: true },
            { word: "movies", strong: true }
        ]
    },
    {
        id: 4,
        text: "彼は本を読みます。",
        answer: "He reads a book",
        choices: ["He", "reads", "a", "book", "is"],
        hint: "「誰が・どうする・何を」の順",
        rhythm: [
            { word: "He", strong: false },
            { word: "reads", strong: true },
            { word: "a", strong: false },
            { word: "book", strong: true }
        ]
    },
    {
        id: 5,
        text: "彼らは音楽が大好きです。",
        answer: "They love music",
        choices: ["They", "love", "music", "are"],
        hint: "感情を表す動詞も配置は同じ",
        rhythm: [
            { word: "They", strong: false },
            { word: "love", strong: true },
            { word: "music", strong: true }
        ]
    },

    // ==========================================
    // パターン2：状態・説明 (SVC)
    // ==========================================
    {
        id: 6,
        text: "この本は面白いです。",
        answer: "This book is interesting",
        choices: ["This", "book", "is", "interesting", "interest"],
        hint: "主語 ＝ 説明（形容詞）",
        rhythm: [
            { word: "This", strong: false },   // 指示語は文脈によるが基本は弱～中
            { word: "book", strong: true },
            { word: "is", strong: false },     // be動詞は弱
            { word: "interesting", strong: true } // 形容詞は強
        ]
    },
    {
        id: 7,
        text: "科学は難しいです。",
        answer: "Science is difficult",
        choices: ["Science", "is", "difficult", "difficulty"],
        hint: "be動詞を使って状態を説明する",
        rhythm: [
            { word: "Science", strong: true },
            { word: "is", strong: false },
            { word: "difficult", strong: true }
        ]
    },
    {
        id: 8,
        text: "彼は医者です。",
        answer: "He is a doctor",
        choices: ["He", "is", "a", "doctor", "does"],
        hint: "主語の正体（名詞）を配置する",
        rhythm: [
            { word: "He", strong: false },
            { word: "is", strong: false },
            { word: "a", strong: false },
            { word: "doctor", strong: true }
        ]
    },
    {
        id: 9,
        text: "空は青いです。",
        answer: "The sky is blue",
        choices: ["The", "sky", "is", "blue", "bluey"],
        hint: "S ＝ C の関係",
        rhythm: [
            { word: "The", strong: false },
            { word: "sky", strong: true },
            { word: "is", strong: false },
            { word: "blue", strong: true }
        ]
    },
    {
        id: 10,
        text: "それは良さそうですね。",
        answer: "That sounds great",
        choices: ["That", "sounds", "great", "is", "greatly"],
        hint: "soundは「＝（のように聞こえる）」という役割",
        rhythm: [
            { word: "That", strong: false },
            { word: "sounds", strong: true },  // 一般動詞扱い
            { word: "great", strong: true }
        ]
    },

    // ==========================================
    // パターン3：長い主語
    // ==========================================
    {
        id: 11,
        text: "サッカーをすることは興奮します。",
        answer: "Playing soccer is exciting",
        choices: ["Playing", "soccer", "is", "exciting", "Play"],
        hint: "〜することは（動名詞のカタマリ）を主語に置く",
        rhythm: [
            { word: "Playing", strong: true },
            { word: "soccer", strong: true },
            { word: "is", strong: false },
            { word: "exciting", strong: true }
        ]
    },
    {
        id: 12,
        text: "歴史を学ぶことは重要です。",
        answer: "To learn history is important",
        choices: ["To", "learn", "history", "is", "important", "Learn"],
        hint: "〜を学ぶこと（不定詞のカタマリ）を主語に置く",
        rhythm: [
            { word: "To", strong: false },     // 不定詞のtoは弱
            { word: "learn", strong: true },
            { word: "history", strong: true },
            { word: "is", strong: false },
            { word: "important", strong: true }
        ]
    },
    {
        id: 13,
        text: "本を読むことは私を幸せにします。",
        answer: "Reading books makes me happy",
        choices: ["Reading", "books", "makes", "me", "happy", "Read"],
        hint: "長い主語 + 動詞(makes) + O + C",
        rhythm: [
            { word: "Reading", strong: true },
            { word: "books", strong: true },
            { word: "makes", strong: true },
            { word: "me", strong: false },     // 目的格代名詞は弱
            { word: "happy", strong: true }
        ]
    },
    {
        id: 14,
        text: "彼女が試験に合格したことは素晴らしい。",
        answer: "That she passed the exam is amazing",
        choices: ["That", "she", "passed", "the", "exam", "is", "amazing"],
        hint: "That節（〜だということ）を主語のボックスに配置",
        rhythm: [
            { word: "That", strong: false },   // 接続詞Thatは弱
            { word: "she", strong: false },
            { word: "passed", strong: true },
            { word: "the", strong: false },
            { word: "exam", strong: true },
            { word: "is", strong: false },
            { word: "amazing", strong: true }
        ]
    },
    {
        id: 15,
        text: "彼が言ったことは本当です。",
        answer: "What he said is true",
        choices: ["What", "he", "said", "is", "true", "That"],
        hint: "What節（彼が言ったこと）を主語に置く",
        rhythm: [
            { word: "What", strong: false },   // 関係代名詞は基本弱（疑問詞なら強だがここは関係詞）
            { word: "he", strong: false },
            { word: "said", strong: true },
            { word: "is", strong: false },
            { word: "true", strong: true }
        ]
    },

    // ==========================================
    // パターン4：長い目的語
    // ==========================================
    {
        id: 16,
        text: "私は音楽を聴くことを楽しみます。",
        answer: "I enjoy listening to music",
        choices: ["I", "enjoy", "listening", "to", "music", "listen"],
        hint: "動詞enjoyの後ろに「〜すること」を配置",
        rhythm: [
            { word: "I", strong: false },
            { word: "enjoy", strong: true },
            { word: "listening", strong: true },
            { word: "to", strong: false },
            { word: "music", strong: true }
        ]
    },
    {
        id: 17,
        text: "彼女は宿題をすることを終えました。",
        answer: "She finished doing her homework",
        choices: ["She", "finished", "doing", "her", "homework", "did"],
        hint: "finishの目的語としてカタマリを置く",
        rhythm: [
            { word: "She", strong: false },
            { word: "finished", strong: true },
            { word: "doing", strong: true },
            { word: "her", strong: false },
            { word: "homework", strong: true }
        ]
    },
    {
        id: 18,
        text: "彼は、私が忙しいということを知っています。",
        answer: "He knows that I am busy",
        choices: ["He", "knows", "that", "I", "am", "busy", "is"],
        hint: "knowの後ろにThat節（カタマリ）を配置",
        rhythm: [
            { word: "He", strong: false },
            { word: "knows", strong: true },
            { word: "that", strong: false },   // 接続詞は弱（省略されることもあるくらい弱い）
            { word: "I", strong: false },
            { word: "am", strong: false },
            { word: "busy", strong: true }
        ]
    },
    {
        id: 19,
        text: "私たちは英語を話すことを練習します。",
        answer: "We practice speaking English",
        choices: ["We", "practice", "speaking", "English", "speak"],
        hint: "動詞の後ろに置くことで役割が決まる",
        rhythm: [
            { word: "We", strong: false },
            { word: "practice", strong: true },
            { word: "speaking", strong: true },
            { word: "English", strong: true }
        ]
    },
    {
        id: 20,
        text: "私は日本語は奥深いと思います。",
        answer: "I think that Japanese is deep",
        choices: ["I", "think", "that", "Japanese", "is", "deep"],
        hint: "thinkの後に「自分の考え」というカタマリを配置",
        rhythm: [
            { word: "I", strong: false },
            { word: "think", strong: true },
            { word: "that", strong: false },
            { word: "Japanese", strong: true },
            { word: "is", strong: false },
            { word: "deep", strong: true }
        ]
    }
];
