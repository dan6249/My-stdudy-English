// chapter14.js
// 所有格 (my/mine, his/hers, etc.) 全50問

const chapter14 = [
    // ==========================================
    // 【A】文脈判断（his / her / their / our）
    // ==========================================
    {
        id: 1,
        text: "ルーシーには兄がいます。彼の好きなスポーツは野球です。",
        answer: "His favorite sport is baseball",
        choices: ["His", "Her", "favorite", "sport", "is", "baseball"],
        hint: "兄（男性）の"
    },
    {
        id: 2,
        text: "ケンとマイクは同級生です。彼らの学校はこの近くです。",
        answer: "Their school is near here",
        choices: ["Their", "His", "school", "is", "near", "here", "Our"],
        hint: "彼ら（2人）の"
    },
    {
        id: 3,
        text: "ミラー先生は日本語を話します。彼女の母は日本人です。",
        answer: "Her mother is Japanese",
        choices: ["Her", "His", "mother", "is", "Japanese", "She"],
        hint: "彼女の"
    },
    {
        id: 4,
        text: "姉と私は音楽が好きです。私たちの好きな歌手は有名です。",
        answer: "Our favorite singer is famous",
        choices: ["Our", "Their", "favorite", "singer", "is", "famous", "We"],
        hint: "私たち（姉と私）の"
    },
    {
        id: 5,
        text: "トムは両親と住んでいます。彼らの家は大きいです。",
        answer: "Their house is big",
        choices: ["Their", "His", "house", "is", "big", "They"],
        hint: "彼ら（両親）の"
    },
    {
        id: 6,
        text: "アヤは猫を飼っています。その名前はモモです。",
        answer: "Her name is Momo",
        choices: ["Her", "His", "name", "is", "Momo", "Its"], // ※ペットの名前なのでHer/Hisも可だが文脈的にHer
        hint: "その猫（メス）の / または彼女の"
    },
    {
        id: 7,
        text: "ボブと彼の妹はテニスが好きです。彼らのラケットは新しいです。",
        answer: "Their rackets are new",
        choices: ["Their", "His", "rackets", "are", "new", "Her"],
        hint: "彼ら（2人）の"
    },
    {
        id: 8,
        text: "私の父は病院で働いています。彼の仕事は医者です。",
        answer: "His job is a doctor",
        choices: ["His", "Her", "job", "is", "a", "doctor", "He"],
        hint: "彼（父）の"
    },
    {
        id: 9,
        text: "スーとケイトは美術部です。彼女たちの部活は楽しいです。",
        answer: "Their club is fun",
        choices: ["Their", "Her", "club", "is", "fun", "She"],
        hint: "彼女たち（2人）の"
    },
    {
        id: 10,
        text: "ケンは英語が得意です。彼の英語はとても上手です。",
        answer: "His English is very good",
        choices: ["His", "Her", "English", "is", "very", "good", "He"],
        hint: "彼（ケン）の"
    },
    {
        id: 11,
        text: "私たちは生徒です。私たちの教室は2階にあります。",
        answer: "Our classroom is on the second floor",
        choices: ["Our", "Their", "classroom", "is", "on", "the", "second", "floor"],
        hint: "私たちの"
    },
    {
        id: 12,
        text: "ティナとリサは姉妹です。彼女たちの父は医者です。",
        answer: "Their father is a doctor",
        choices: ["Their", "Her", "father", "is", "a", "doctor", "They"],
        hint: "彼女たち（2人）の"
    },
    {
        id: 13,
        text: "私の両親は大阪に住んでいます。彼らの家はそこにあります。",
        answer: "Their house is there",
        choices: ["Their", "Our", "house", "is", "there", "They"],
        hint: "彼ら（両親）の"
    },
    {
        id: 14,
        text: "ルーシーは一生懸命勉強します。彼女の成績は良いです。",
        answer: "Her grades are good",
        choices: ["Her", "His", "grades", "are", "good", "She"],
        hint: "彼女（ルーシー）の"
    },
    {
        id: 15,
        text: "私たちは放課後サッカーをします。私たちのチームは強いです。",
        answer: "Our team is strong",
        choices: ["Our", "Their", "team", "is", "strong", "We"],
        hint: "私たちの"
    },

    // ==========================================
    // 【B】my / mine・her / hers の判断（名詞の有無）
    // ==========================================
    {
        id: 16,
        text: "これは私の自転車です。",
        answer: "This is my bike",
        choices: ["This", "is", "my", "bike", "mine"],
        hint: "後ろに名詞(bike)がある"
    },
    {
        id: 17,
        text: "あのかばんは彼女のものです。",
        answer: "That bag is hers",
        choices: ["That", "bag", "is", "hers", "her"],
        hint: "後ろに名詞がない"
    },
    {
        id: 18,
        text: "これらの本は彼らのものです。",
        answer: "These books are theirs",
        choices: ["These", "books", "are", "theirs", "their"],
        hint: "後ろに名詞がない"
    },
    {
        id: 19,
        text: "これはあなたのペンですか？",
        answer: "Is this your pen",
        choices: ["Is", "this", "your", "pen", "yours"],
        hint: "後ろに名詞(pen)がある"
    },
    {
        id: 20,
        text: "この教室は私たちのものです。",
        answer: "This classroom is ours",
        choices: ["This", "classroom", "is", "ours", "our"],
        hint: "後ろに名詞がない"
    },
    {
        id: 21,
        text: "その赤いやつは私のものです。",
        answer: "The red one is mine",
        choices: ["The", "red", "one", "is", "mine", "my"],
        hint: "後ろに名詞がない"
    },
    {
        id: 22,
        text: "あの家は彼らのものです。",
        answer: "That house is theirs",
        choices: ["That", "house", "is", "theirs", "their"],
        hint: "後ろに名詞がない"
    },
    {
        id: 23,
        text: "これは彼の机ではありません。",
        answer: "This is not his desk",
        choices: ["This", "is", "not", "his", "desk", "him"],
        hint: "後ろに名詞(desk)がある"
    },
    {
        id: 24,
        text: "その青い自転車は彼女のものです。",
        answer: "The blue bike is hers",
        choices: ["The", "blue", "bike", "is", "hers", "her"],
        hint: "後ろに名詞がない"
    },
    {
        id: 25,
        text: "これらのノートは私たちのものです。",
        answer: "These notebooks are ours",
        choices: ["These", "notebooks", "are", "ours", "our"],
        hint: "後ろに名詞がない"
    },
    {
        id: 26,
        text: "この傘は私のものです。",
        answer: "This umbrella is mine",
        choices: ["This", "umbrella", "is", "mine", "my"],
        hint: "後ろに名詞がない"
    },
    {
        id: 27,
        text: "あの席は彼のものです。",
        answer: "That seat is his",
        choices: ["That", "seat", "is", "his", "him"],
        hint: "hisは所有格も独立所有格も同じ形"
    },
    {
        id: 28,
        text: "その大きな部屋は彼らのものです。",
        answer: "The big room is theirs",
        choices: ["The", "big", "room", "is", "theirs", "their"],
        hint: "後ろに名詞がない"
    },
    {
        id: 29,
        text: "その小さいかばんはあなたのものですか？",
        answer: "Is the small bag yours",
        choices: ["Is", "the", "small", "bag", "yours", "your"],
        hint: "後ろに名詞がない"
    },
    {
        id: 30,
        text: "これらの靴は彼女のものではありません。",
        answer: "These shoes are not hers",
        choices: ["These", "shoes", "are", "not", "hers", "her"],
        hint: "後ろに名詞がない"
    },

    // ==========================================
    // 【C】a / the を入れてはいけない問題
    // ==========================================
    {
        id: 31,
        text: "これは私の自転車です。",
        answer: "This is my bike",
        choices: ["This", "is", "my", "bike", "a", "the"],
        hint: "myの前にa/theはつけない"
    },
    {
        id: 32,
        text: "あれは彼女の家です。",
        answer: "That is her house",
        choices: ["That", "is", "her", "house", "a", "the"],
        hint: "herの前にa/theはつけない"
    },
    {
        id: 33,
        text: "彼は彼の学校が好きです。",
        answer: "He likes his school",
        choices: ["He", "likes", "his", "school", "a", "the"],
        hint: "hisの前にa/theはつけない"
    },
    {
        id: 34,
        text: "これは私たちの教室です。",
        answer: "This is our classroom",
        choices: ["This", "is", "our", "classroom", "a", "the"],
        hint: "ourの前にa/theはつけない"
    },
    {
        id: 35,
        text: "私は彼らの先生を知っています。",
        answer: "I know their teacher",
        choices: ["I", "know", "their", "teacher", "a", "the"],
        hint: "theirの前にa/theはつけない"
    },
    {
        id: 36,
        text: "あれはあなたのかばんですか？",
        answer: "Is that your bag",
        choices: ["Is", "that", "your", "bag", "a", "the"],
        hint: "yourの前にa/theはつけない"
    },
    {
        id: 37,
        text: "彼女は彼女の部屋を掃除します。",
        answer: "She cleans her room",
        choices: ["She", "cleans", "her", "room", "a", "the"],
        hint: "herの前にa/theはつけない"
    },
    {
        id: 38,
        text: "私たちは私たちの英語の授業が好きです。",
        answer: "We like our English class",
        choices: ["We", "like", "our", "English", "class", "a", "the"],
        hint: "ourの前にa/theはつけない"
    },
    {
        id: 39,
        text: "彼は彼の電話をなくしました。",
        answer: "He lost his phone",
        choices: ["He", "lost", "his", "phone", "a", "the"],
        hint: "hisの前にa/theはつけない"
    },
    {
        id: 40,
        text: "彼らは彼らの故郷を愛しています。",
        answer: "They love their hometown",
        choices: ["They", "love", "their", "hometown", "a", "the"],
        hint: "theirの前にa/theはつけない"
    },

    // ==========================================
    // 【D】人名＋’s と代名詞の使い分け
    // ==========================================
    {
        id: 41,
        text: "これはケンの自転車です。（ケンは初登場）",
        answer: "This is Ken's bike",
        choices: ["This", "is", "Ken's", "bike", "his"],
        hint: "初めて話題に出すときは名前で"
    },
    {
        id: 42,
        text: "ケンは自転車を持っています。これは彼の自転車です。",
        answer: "This is his bike",
        choices: ["This", "is", "his", "bike", "Ken's"],
        hint: "2回目以降は代名詞で"
    },
    {
        id: 43,
        text: "あれはミラー先生の家です。（初登場）",
        answer: "That is Ms. Miller's house",
        choices: ["That", "is", "Ms.", "Miller's", "house", "her"],
        hint: "初めて話題に出すときは名前で"
    },
    {
        id: 44,
        text: "ミラー先生はここに住んでいます。あれは彼女の家です。",
        answer: "That is her house",
        choices: ["That", "is", "her", "house", "Ms.", "Miller's"],
        hint: "すでに話題に出ているなら代名詞"
    },
    {
        id: 45,
        text: "ティナとリサは姉妹です。彼女たちの父は医者です。",
        answer: "Their father is a doctor",
        choices: ["Their", "father", "is", "a", "doctor", "Tina", "Lisa's"],
        hint: "2回目以降は代名詞で"
    },
    {
        id: 46,
        text: "ルーシーは猫を飼っています。彼女の猫はかわいいです。",
        answer: "Her cat is cute",
        choices: ["Her", "cat", "is", "cute", "Lucy's"],
        hint: "すでに話題に出ているなら代名詞"
    },
    {
        id: 47,
        text: "私の兄は背が高いです。これは彼の部屋です。",
        answer: "This is his room",
        choices: ["This", "is", "his", "room", "my", "brother's"],
        hint: "すでに話題に出ているなら代名詞"
    },
    {
        id: 48,
        text: "ボブとマイクは友達です。これは彼らの教室です。",
        answer: "This is their classroom",
        choices: ["This", "is", "their", "classroom", "Bob", "Mike's"],
        hint: "すでに話題に出ているなら代名詞"
    },
    {
        id: 49,
        text: "アヤは私の友達です。彼女のかばんは赤いです。",
        answer: "Her bag is red",
        choices: ["Her", "bag", "is", "red", "Aya's"],
        hint: "すでに話題に出ているなら代名詞"
    },
    {
        id: 50,
        text: "私の両親は教師です。彼らの学校は大きいです。",
        answer: "Their school is big",
        choices: ["Their", "school", "is", "big", "My", "parents'"],
        hint: "すでに話題に出ているなら代名詞"
    }
];