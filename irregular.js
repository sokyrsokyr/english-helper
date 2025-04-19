const irregularVerbs = [
  { base: "arise", past: "arose", participle: "arisen", translation: "возникать" },
  { base: "be", past: "was/were", participle: "been", translation: "быть" },
  { base: "bear", past: "bore", participle: "borne", translation: "нести" },
  { base: "beat", past: "beat", participle: "beaten", translation: "бить" },
  { base: "become", past: "became", participle: "become", translation: "становиться" },
  { base: "begin", past: "began", participle: "begun", translation: "начинать" },
  { base: "bend", past: "bent", participle: "bent", translation: "сгибать" },
  { base: "bet", past: "bet", participle: "bet", translation: "держать пари" },
  { base: "bind", past: "bound", participle: "bound", translation: "связывать" },
  { base: "bite", past: "bit", participle: "bitten", translation: "кусать" },
  { base: "bleed", past: "bled", participle: "bled", translation: "кровоточить" },
  { base: "blow", past: "blew", participle: "blown", translation: "дуть" },
  { base: "break", past: "broke", participle: "broken", translation: "ломать" },
  { base: "bring", past: "brought", participle: "brought", translation: "приносить" },
  { base: "broadcast", past: "broadcast", participle: "broadcast", translation: "вещать" },
  { base: "build", past: "built", participle: "built", translation: "строить" },
  { base: "burn", past: "burnt", participle: "burnt", translation: "гореть" },
  { base: "burst", past: "burst", participle: "burst", translation: "лопаться" },
  { base: "buy", past: "bought", participle: "bought", translation: "покупать" },
  { base: "catch", past: "caught", participle: "caught", translation: "ловить" },
  { base: "choose", past: "chose", participle: "chosen", translation: "выбирать" },
  { base: "come", past: "came", participle: "come", translation: "приходить" },
  { base: "cost", past: "cost", participle: "cost", translation: "стоить" },
  { base: "cut", past: "cut", participle: "cut", translation: "резать" },
  { base: "deal", past: "dealt", participle: "dealt", translation: "иметь дело" },
  { base: "dig", past: "dug", participle: "dug", translation: "копать" },
  { base: "do", past: "did", participle: "done", translation: "делать" },
  { base: "draw", past: "drew", participle: "drawn", translation: "рисовать" },
  { base: "dream", past: "dreamt", participle: "dreamt", translation: "мечтать" },
  { base: "drink", past: "drank", participle: "drunk", translation: "пить" },
  { base: "drive", past: "drove", participle: "driven", translation: "водить" },
  { base: "eat", past: "ate", participle: "eaten", translation: "есть" },
  { base: "fall", past: "fell", participle: "fallen", translation: "падать" },
  { base: "feed", past: "fed", participle: "fed", translation: "кормить" },
  { base: "feel", past: "felt", participle: "felt", translation: "чувствовать" },
  { base: "fight", past: "fought", participle: "fought", translation: "драться" },
  { base: "find", past: "found", participle: "found", translation: "находить" },
  { base: "fly", past: "flew", participle: "flown", translation: "летать" },
  { base: "forget", past: "forgot", participle: "forgotten", translation: "забывать" },
  { base: "forgive", past: "forgave", participle: "forgiven", translation: "прощать" },
  { base: "freeze", past: "froze", participle: "frozen", translation: "замерзать" },
  { base: "get", past: "got", participle: "gotten", translation: "получать" },
  { base: "give", past: "gave", participle: "given", translation: "давать" },
  { base: "go", past: "went", participle: "gone", translation: "идти" },
  { base: "grow", past: "grew", participle: "grown", translation: "расти" },
  { base: "hang", past: "hung", participle: "hung", translation: "вешать" },
  { base: "have", past: "had", participle: "had", translation: "иметь" },
  { base: "hear", past: "heard", participle: "heard", translation: "слышать" },
  { base: "hide", past: "hid", participle: "hidden", translation: "прятать" },
  { base: "hit", past: "hit", participle: "hit", translation: "ударять" },
  { base: "hold", past: "held", participle: "held", translation: "держать" },
  { base: "hurt", past: "hurt", participle: "hurt", translation: "ранить" },
  { base: "keep", past: "kept", participle: "kept", translation: "хранить" },
  { base: "know", past: "knew", participle: "known", translation: "знать" },
  { base: "lay", past: "laid", participle: "laid", translation: "класть" },
  { base: "lead", past: "led", participle: "led", translation: "вести" },
  { base: "learn", past: "learnt", participle: "learnt", translation: "учить" },
  { base: "leave", past: "left", participle: "left", translation: "покидать" },
  { base: "lend", past: "lent", participle: "lent", translation: "одалживать" },
  { base: "let", past: "let", participle: "let", translation: "позволять" },
  { base: "lie", past: "lay", participle: "lain", translation: "лежать" },
  { base: "light", past: "lit", participle: "lit", translation: "зажигать" },
  { base: "lose", past: "lost", participle: "lost", translation: "терять" },
  { base: "make", past: "made", participle: "made", translation: "делать" },
  { base: "mean", past: "meant", participle: "meant", translation: "означать" },
  { base: "meet", past: "met", participle: "met", translation: "встречать" },
  { base: "pay", past: "paid", participle: "paid", translation: "платить" },
  { base: "put", past: "put", participle: "put", translation: "класть" },
  { base: "read", past: "read", participle: "read", translation: "читать" },
  { base: "ride", past: "rode", participle: "ridden", translation: "ездить верхом" },
  { base: "ring", past: "rang", participle: "rung", translation: "звонить" },
  { base: "rise", past: "rose", participle: "risen", translation: "подниматься" },
  { base: "run", past: "ran", participle: "run", translation: "бегать" },
  { base: "say", past: "said", participle: "said", translation: "сказать" },
  { base: "see", past: "saw", participle: "seen", translation: "видеть" },
  { base: "sell", past: "sold", participle: "sold", translation: "продавать" },
  { base: "send", past: "sent", participle: "sent", translation: "отправлять" },
  { base: "set", past: "set", participle: "set", translation: "устанавливать" },
  { base: "shake", past: "shook", participle: "shaken", translation: "трясти" },
  { base: "shine", past: "shone", participle: "shone", translation: "светить" },
  { base: "shoot", past: "shot", participle: "shot", translation: "стрелять" },
  { base: "show", past: "showed", participle: "shown", translation: "показывать" },
  { base: "shut", past: "shut", participle: "shut", translation: "закрывать" },
  { base: "sing", past: "sang", participle: "sung", translation: "петь" },
  { base: "sit", past: "sat", participle: "sat", translation: "сидеть" },
  { base: "sleep", past: "slept", participle: "slept", translation: "спать" },
  { base: "speak", past: "spoke", participle: "spoken", translation: "говорить" },
  { base: "spend", past: "spent", participle: "spent", translation: "тратить" },
  { base: "stand", past: "stood", participle: "stood", translation: "стоять" },
  { base: "steal", past: "stole", participle: "stolen", translation: "воровать" },
  { base: "swim", past: "swam", participle: "swum", translation: "плавать" },
  { base: "take", past: "took", participle: "taken", translation: "брать" },
  { base: "teach", past: "taught", participle: "taught", translation: "учить" },
  { base: "tear", past: "tore", participle: "torn", translation: "рвать" },
  { base: "tell", past: "told", participle: "told", translation: "рассказывать" },
  { base: "think", past: "thought", participle: "thought", translation: "думать" },
  { base: "throw", past: "threw", participle: "thrown", translation: "бросать" },
  { base: "understand", past: "understood", participle: "understood", translation: "понимать" },
  { base: "wake", past: "woke", participle: "woken", translation: "просыпаться" },
  { base: "wear", past: "wore", participle: "worn", translation: "носить" },
  { base: "win", past: "won", participle: "won", translation: "побеждать" },
  { base: "write", past: "wrote", participle: "written", translation: "писать" },
];