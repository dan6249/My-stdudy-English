// chapterSentencePatterns.js
// 5つの文型と重要フレーズ 全50問

const chapterSentencePatterns = [
    // ==========================================
    // 【1】第1文型 (SV + 修飾語) & 自動詞
    // ==========================================
    {
        id: 1,
        text: "私たちは美術館へ行きました。",
        answer: "We went to the museum",
        choices: ["We", "went", "to", "the", "museum", "at", "in"],
        hint: "goは自動詞なので目的地にはtoが必要"
    },
    {
        id: 2,
        text: "私を見て。",
        answer: "Look at me",
        choices: ["Look", "at", "me", "to", "for"],
        hint: "lookは自動詞。「〜を見る」はatを使う"
    },
    {
        id: 3,
        text: "その歌を聴いて。",
        answer: "Listen to the song",
        choices: ["Listen", "to", "the", "song", "at", "on"],
        hint: "listenは自動詞。「〜を聴く」はtoが必要"
    },
    {
        id: 4,
        text: "私はその問題についてジョンと話しました。",
        answer: "I talked with John about the matter",
        choices: ["I", "talked", "with", "John", "about", "the", "matter", "to"],
        hint: "talk with 人 about 物事"
    },
    {
        id: 5,
        text: "私たちは東京に住んでいます。",
        answer: "We live in Tokyo",
        choices: ["We", "live", "in", "Tokyo", "at", "to"],
        hint: "liveは自動詞。「〜に住む」はinが必要"
    },

    // ==========================================
    // 【2】第2文型 (SVC) & 状態・変化
    // ==========================================
    {
        id: 6,
        text: "ジョンは医者になりました。",
        answer: "John became a doctor",
        choices: ["John", "became", "a", "doctor", "to", "be"],
        hint: "S=Cの関係（ジョン＝医者）"
    },
    {
        id: 7,
        text: "ジョンは幸せそうに見えます。",
        answer: "John looks happy",
        choices: ["John", "looks", "happy", "happily", "like"],
        hint: "look + 形容詞で「〜そうに見える」"
    },
    {
        id: 8,
        text: "ジョンは教授のように見えます。",
        answer: "John looks like a professor",
        choices: ["John", "looks", "like", "a", "professor", "as"],
        hint: "名詞を置く場合は look like 〜"
    },
    {
        id: 9,
        text: "それはいい考えだね。",
        answer: "That sounds like a good idea",
        choices: ["That", "sounds", "like", "a", "good", "idea", "as"],
        hint: "sound like + 名詞"
    },
    {
        id: 10,
        text: "ジョンは黙ったままでした。",
        answer: "John remained silent",
        choices: ["John", "remained", "silent", "silently", "stay"],
        hint: "remain + 形容詞（〜のままでいる）"
    },
    {
        id: 11,
        text: "そのミルクは酸っぱい味がします。",
        answer: "The milk tastes sour",
        choices: ["The", "milk", "tastes", "sour", "sourly", "like"],
        hint: "taste + 形容詞（〜の味がする）"
    },
    {
        id: 12,
        text: "ジョンは怒りました（怒った状態になった）。",
        answer: "John got angry",
        choices: ["John", "got", "angry", "angrily", "became"],
        hint: "get + 形容詞（〜になる）"
    },
    {
        id: 13,
        text: "私の夢が叶いました。",
        answer: "My dream came true",
        choices: ["My", "dream", "came", "true", "truly", "became"],
        hint: "come true（実現する）"
    },
    {
        id: 14,
        text: "何かがおかしくなりました。",
        answer: "Something went wrong",
        choices: ["Something", "went", "wrong", "wrongly", "bad"],
        hint: "go wrong（悪くなる、失敗する）"
    },
    {
        id: 15,
        text: "ジョンは寝落ちしました。",
        answer: "John fell asleep",
        choices: ["John", "fell", "asleep", "sleepy", "sleeping"],
        hint: "fall asleep（眠りに落ちる）"
    },

    // ==========================================
    // 【3】第3文型 (SVO) & 他動詞
    // ==========================================
    {
        id: 16,
        text: "私たちは美術館を訪れます。",
        answer: "We visit the museum",
        choices: ["We", "visit", "the", "museum", "to", "at"],
        hint: "visitは他動詞。toは不要"
    },
    {
        id: 17,
        text: "私たちはその問題を話し合います。",
        answer: "We discuss the matter",
        choices: ["We", "discuss", "the", "matter", "about", "on"],
        hint: "discussは他動詞。aboutは不要"
    },
    {
        id: 18,
        text: "私たちはその犬に近づきました。",
        answer: "We approached the dog",
        choices: ["We", "approached", "the", "dog", "to", "at"],
        hint: "approachは他動詞。toは不要"
    },
    {
        id: 19,
        text: "私たちは駅に着きました（reachを使用）。",
        answer: "We reached the station",
        choices: ["We", "reached", "the", "station", "at", "to"],
        hint: "reachは他動詞。atは不要"
    },
    {
        id: 20,
        text: "私たちは部屋に入りました。",
        answer: "We entered the room",
        choices: ["We", "entered", "the", "room", "into", "to"],
        hint: "enterは他動詞。intoは不要"
    },
    {
        id: 21,
        text: "私たちはその会社に連絡しました。",
        answer: "We contacted the company",
        choices: ["We", "contacted", "the", "company", "with", "to"],
        hint: "contactは他動詞。withは不要"
    },
    {
        id: 22,
        text: "ジョンはスーザンと結婚しました。",
        answer: "John married Susan",
        choices: ["John", "married", "Susan", "with", "to"],
        hint: "marryは他動詞。withは不要"
    },
    {
        id: 23,
        text: "ジョンによろしく伝えてください。",
        answer: "Please say hello to John",
        choices: ["Please", "say", "hello", "to", "John", "with"],
        hint: "say 物 to 人"
    },
    {
        id: 24,
        text: "私には違いが分かります。",
        answer: "I can tell the difference",
        choices: ["I", "can", "tell", "the", "difference", "know", "say"],
        hint: "tell（見分ける、わかる）"
    },

    // ==========================================
    // 【4】第4文型 (SVOO) & 授与動詞
    // ==========================================
    {
        id: 25,
        text: "あなたに全てを与えましょう。",
        answer: "I'll give you everything",
        choices: ["I'll", "give", "you", "everything", "to", "for"],
        hint: "give 人 物"
    },
    {
        id: 26,
        text: "私は全てをあなたにあげます。",
        answer: "I give everything to you",
        choices: ["I", "give", "everything", "to", "you", "for"],
        hint: "give 物 to 人"
    },
    {
        id: 27,
        text: "私はペンをあなたに貸します。",
        answer: "I lend my pen to you",
        choices: ["I", "lend", "my", "pen", "to", "you", "for"],
        hint: "lend 物 to 人"
    },
    {
        id: 28,
        text: "あなたに英語を教えます。",
        answer: "I teach you English",
        choices: ["I", "teach", "you", "English", "to", "for"],
        hint: "teach 人 物"
    },
    {
        id: 29,
        text: "あなたに水を持ってきてあげます。",
        answer: "I get you some water",
        choices: ["I", "get", "you", "some", "water", "for", "to"],
        hint: "get 人 物"
    },
    {
        id: 30,
        text: "私はあなたのために水を持ってきてあげます。",
        answer: "I get some water for you",
        choices: ["I", "get", "some", "water", "for", "you", "to"],
        hint: "get 物 for 人"
    },
    {
        id: 31,
        text: "あなたに何でも買ってあげます。",
        answer: "I buy you everything",
        choices: ["I", "buy", "you", "everything", "for", "to"],
        hint: "buy 人 物"
    },
    {
        id: 32,
        text: "私はあなたのために何でも買います。",
        answer: "I buy everything for you",
        choices: ["I", "buy", "everything", "for", "you", "to"],
        hint: "buy 物 for 人"
    },
    {
        id: 33,
        text: "あなたに何か作ってあげます。",
        answer: "I make you something",
        choices: ["I", "make", "you", "something", "for", "to"],
        hint: "make 人 物"
    },
    {
        id: 34,
        text: "私はそれをあなたに伝えます。",
        answer: "I tell it to you",
        choices: ["I", "tell", "it", "to", "you", "for"],
        hint: "itが目的語の時は I tell you it とは言わない"
    },

    // ==========================================
    // 【5】第5文型 (SVOC)
    // ==========================================
    {
        id: 35,
        text: "ケンは自分の犬をジョンと名付けました。",
        answer: "Ken named his dog John",
        choices: ["Ken", "named", "his", "dog", "John", "as", "to"],
        hint: "O=C（犬＝ジョン）"
    },
    {
        id: 36,
        text: "私はドアを閉めたままにしておきました。",
        answer: "I left the door closed",
        choices: ["I", "left", "the", "door", "closed", "close", "closing"],
        hint: "O=C（ドア＝閉まっている）"
    },
    {
        id: 37,
        text: "ドアが閉まっているのが分かりました。",
        answer: "I found the door closed",
        choices: ["I", "found", "the", "door", "closed", "close"],
        hint: "find O C（OがCだとわかる）"
    },
    {
        id: 38,
        text: "その話が本当だと分かりました。",
        answer: "I found the story true",
        choices: ["I", "found", "the", "story", "true", "truly"],
        hint: "O=C（話＝本当）"
    },
    {
        id: 39,
        text: "その犬は私たちを幸せにしました。",
        answer: "The dog made us happy",
        choices: ["The", "dog", "made", "us", "happy", "happily"],
        hint: "make O C（OをCにする）"
    },
    {
        id: 40,
        text: "私はドアを開けっぱなしにしておきます（意図的）。",
        answer: "I keep the door open",
        choices: ["I", "keep", "the", "door", "open", "opened"],
        hint: "keep O C（意図的に保つ）"
    },
    {
        id: 41,
        text: "私はドアを開けっぱなしにしました（放置）。",
        answer: "I left the door open",
        choices: ["I", "left", "the", "door", "open", "opened"],
        hint: "leave O C（放置する）"
    },
    {
        id: 42,
        text: "ケンは食事の準備をしました。",
        answer: "Ken got food ready",
        choices: ["Ken", "got", "food", "ready", "readily"],
        hint: "get O C（OをCの状態にする）"
    },

    // ==========================================
    // 【6】副詞を伴う移動・到着
    // ==========================================
    {
        id: 43,
        text: "私たちは早く家に着きました。",
        answer: "We got home early",
        choices: ["We", "got", "home", "early", "to", "at"],
        hint: "homeは副詞。toは不要"
    },
    {
        id: 44,
        text: "私たちは早く学校に着きました（getを使用）。",
        answer: "We got to school early",
        choices: ["We", "got", "to", "school", "early", "at"],
        hint: "schoolは名詞。get toが必要"
    },
    {
        id: 45,
        text: "私たちはそこへ行きました。",
        answer: "We went there",
        choices: ["We", "went", "there", "to", "at"],
        hint: "thereは副詞。toは不要"
    },
    {
        id: 46,
        text: "私たちはここへ来ました。",
        answer: "We came here",
        choices: ["We", "came", "here", "to", "at"],
        hint: "hereは副詞。toは不要"
    },
    {
        id: 47,
        text: "私たちは海外へ行きます。",
        answer: "We go abroad",
        choices: ["We", "go", "abroad", "to", "in"],
        hint: "abroadは副詞。toは不要"
    },
    {
        id: 48,
        text: "私たちは上の階へ行きました。",
        answer: "We went upstairs",
        choices: ["We", "went", "upstairs", "to", "at"],
        hint: "upstairsは副詞。toは不要"
    },
    {
        id: 49,
        text: "私たちは地下へ行きました。",
        answer: "We went underground",
        choices: ["We", "went", "underground", "to", "in"],
        hint: "undergroundは副詞。toは不要"
    },
    {
        id: 50,
        text: "私たちは繁華街へ行きました。",
        answer: "We went downtown",
        choices: ["We", "went", "downtown", "to", "at"],
        hint: "downtownは副詞。toは不要"
    }
];