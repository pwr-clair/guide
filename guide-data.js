/* ================================================================
   Paradise Walk Residence — 주변 안내(Around) 데이터
   이 파일은 관리자 에디터(edit.html)로 편집합니다.
   직접 손대지 마세요. edit.html에서 폼으로 고친 뒤 새로 받은
   이 파일(guide-data.js)을 그대로 GitHub에 올리면 반영됩니다.
   ================================================================ */
  var CATS = [
    { key:'conv',  icon:'🏪', title:{ en:'Convenience Stores', ko:'편의점', ja:'コンビニ', zh:'便利店' } },
    { key:'food',  icon:'🍽️', title:{ en:'Restaurants', ko:'근처 식당', ja:'近くの飲食店', zh:'附近餐厅' } },
    { key:'cafe',  icon:'☕', title:{ en:'Cafés & Bars', ko:'카페 및 바', ja:'カフェ・バー', zh:'咖啡与酒吧' },
      intro:{ en:`Arrived before check-in (3:00 PM)? You're welcome to relax and wait at a nearby café.`,
              ko:`체크인(오후 3시) 이전에 도착하셨다면, 근처 카페에서 잠시 쉬며 기다리실 수 있어요.`,
              ja:`チェックイン（15:00）前にご到着の場合は、近くのカフェでゆっくりお待ちいただけます。`,
              zh:`若在入住（下午3点）前抵达，可在附近的咖啡馆稍作休息等候。` } },
    { key:'pharm', icon:'💊', title:{ en:'Pharmacy & Clinic', ko:'약국 & 의원', ja:'薬局・クリニック', zh:'药店与诊所' } },
    { key:'etc',   icon:'✨', title:{ en:'Other', ko:'기타', ja:'その他', zh:'其他' } }
  ];
  var PLACES = {
    conv: [
      { name:'Emart24', url:'https://maps.app.goo.gl/usDZhFei6mbayUSk6',
        d:{ en:`1F of our building`, ko:`숙소 건물 1층`, ja:`当施設の建物1階`, zh:`住宿楼1层` } },
      { name:'CU', url:'https://maps.app.goo.gl/iTHUm9HTZkvTKAjy8',
        d:{ en:`1F of the building next door`, ko:`숙소 옆 건물 1층`, ja:`隣の建物1階`, zh:`隔壁楼1层` } },
      { name:'7-Eleven', url:'https://maps.app.goo.gl/9jgvRbNyNUz42k8j9',
        d:{ en:``, ko:``, ja:``, zh:`` } },
      { name:'CU Airport Dioville Branch', url:'https://maps.app.goo.gl/sAiFLBWuif3PMyvRA',
        d:{ en:``, ko:``, ja:``, zh:`` } }
    ],
    food: [
      { name:'공항밥집', url:'https://maps.app.goo.gl/sVwL7cQoXPtYd7GC9',
        alt:{ en:`Gonghang Bapjip`, ja:`コンハンパプチプ`, zh:`Gonghang Bapjip` },
        d:{ en:`1F of our building · Korean buffet · opens early, from 6:30 AM`, ko:`숙소 건물 1층 · 한식 뷔페 · 이른 아침 6:30부터 영업`, ja:`当施設の建物1階 · 韓国式ビュッフェ · 朝6:30から営業`, zh:`住宿楼1层 · 韩式自助 · 清晨6:30起营业` } },
      { name:'BHC치킨 인천공항점', url:'https://maps.app.goo.gl/YqWkZfYLfv7fNxhu9',
        alt:{ en:`BHC Chicken`, ja:`BHCチキン`, zh:`BHC炸鸡` },
        d:{ en:`1F of our building · fried-chicken franchise`, ko:`숙소 건물 1층 · 치킨 프랜차이즈`, ja:`当施設の建物1階 · チキンのフランチャイズ`, zh:`住宿楼1层 · 炸鸡连锁店` } },
      { name:'마마님', url:'https://maps.app.goo.gl/2ADwzgMGARFK52hg8',
        alt:{ en:`Mamanim`, ja:`ママニム`, zh:`Mamanim` },
        d:{ en:`Korean BBQ · a popular grill house · also serves single Korean dishes`, ko:`한식 BBQ · 인기 있는 고기집 · 한식 단품 메뉴도 판매`, ja:`韓国式BBQ · 人気の焼肉店 · 韓国料理の単品メニューもあり`, zh:`韩式烤肉 · 人气烤肉店 · 也提供韩餐单品` } },
      { name:'예나밥상', url:'https://maps.app.goo.gl/35PDvHiNVgu2HdJj8',
        alt:{ en:`Yena Bapsang`, ja:`イェナパプサン`, zh:`Yena Bapsang` },
        d:{ en:`Korean restaurant · also serves single Korean dishes`, ko:`한식당 · 한식 단품 메뉴도 판매`, ja:`韓国料理店 · 韓国料理の単品メニューもあり`, zh:`韩餐厅 · 也提供韩餐单品` } },
      { name:'빨간거짱구네', url:'https://maps.app.goo.gl/McYTmmb7YjBgjuAD9',
        alt:{ en:`Ppalgangeo Jjanggune`, ja:`パルガンゴ・チャングネ`, zh:`Ppalgangeo Jjanggune` },
        d:{ en:`Korean restaurant · specializes in nakji-jeongol (octopus hot pot) · single-person orders not available`, ko:`한식당 · 낙지를 탕에 넣어서 먹는 '낙지전골' 전문점 · 1인분은 어려워요`, ja:`韓国料理店 · テナガダコ鍋「ナクチチョンゴル」の専門店 · 1人前のご注文は難しいです`, zh:`韩餐厅 · 章鱼火锅（낙지전골）专门店 · 不接受单人份` } },
      { name:'전주 현대옥', url:'https://maps.app.goo.gl/L6KffS5Ww9U9e83M7',
        alt:{ en:`Jeonju Hyundaiok`, ja:`チョンジュ・ヒョンデオク`, zh:`全州现代屋` },
        d:{ en:`Korean · specializes in bean-sprout soup rice (kongnamul-gukbap)`, ko:`한식 콩나물국밥 전문점`, ja:`韓国料理 · 豆もやしクッパの専門店`, zh:`韩餐 · 豆芽汤饭专门店` } },
      { name:'용경향', url:'https://maps.app.goo.gl/SCPkwBrDs7LpgLDv7',
        alt:{ en:`Yonggyeonghyang`, ja:`ヨンギョンヒャン`, zh:`Yonggyeonghyang` },
        d:{ en:`Chinese restaurant`, ko:`중식 전문점`, ja:`中華料理店`, zh:`中餐厅` } },
      { name:'파라다이스시티 호텔 & 카지노', url:'https://maps.app.goo.gl/x8Yb56NhaHxqnkuD6',
        alt:{ en:`Paradise City Hotel & Casino`, ja:`パラダイスシティ ホテル&カジノ`, zh:`百乐达斯城酒店&赌场` },
        d:{ en:`Several restaurants and a food court inside the hotel.`,
            ko:`호텔 내 여러 레스토랑과 푸드코트가 있습니다.`,
            ja:`ホテル内に複数のレストランとフードコートがあります。`,
            zh:`酒店内设有多家餐厅和美食广场。` } },
      { name:'그랜드 하얏트 인천', url:'https://maps.app.goo.gl/c6rx9L2g7v4SmvQG8',
        alt:{ en:`Grand Hyatt Incheon`, ja:`グランドハイアット仁川`, zh:`仁川君悦酒店` },
        d:{ en:`Restaurants are available inside the hotel.`, ko:`호텔 내 레스토랑을 이용할 수 있습니다.`, ja:`ホテル内のレストランを利用できます。`, zh:`酒店内设有餐厅。` } }
    ],
    cafe: [
      { name:'Han Coffee Shop', url:'https://maps.app.goo.gl/qMyN3zu4Nf8XSTBn8',
        d:{ en:`1F of our building · opens 6:30 AM`, ko:`숙소 건물 1층 · 새벽 6:30 오픈`, ja:`当施設の建物1階 · 6:30オープン`, zh:`住宿楼1层 · 6:30开门` } },
      { name:'메가커피 영종합동청사점', url:'https://maps.app.goo.gl/8tNKdpwRHMVLNi1k7',
        alt:{ en:`Mega Coffee`, ja:`メガコーヒー`, zh:`Mega Coffee` },
        d:{ en:`1F of the building right next door`, ko:`숙소 바로 옆 건물 1층`, ja:`すぐ隣の建物1階`, zh:`紧邻的隔壁楼1层` } },
      { name:'이디야커피', url:'https://maps.app.goo.gl/yPch8Ejnh14WxhQa9',
        alt:{ en:`EDIYA Coffee`, ja:`イディヤコーヒー`, zh:`EDIYA Coffee` },
        d:{ en:`Café`, ko:`카페`, ja:`カフェ`, zh:`咖啡馆` } },
      { name:'The Cinder Bar (Incheon Airport)', url:'https://maps.app.goo.gl/oLBFQTrVRxn1XEZq5',
        d:{ en:`1F of our building`, ko:`숙소 건물 1층`, ja:`当施設の建物1階`, zh:`住宿楼1层` } },
      { name:'The Jet Lagged Lizard', url:'https://maps.app.goo.gl/HYsVu6a3tBkULsh27',
        d:{ en:`Western-style pub/bar · open until 2:00 AM`, ko:`서양식 펍/바 · 새벽 2시까지 영업`, ja:`洋風パブ・バー · 深夜2時まで営業`, zh:`西式酒吧 · 营业至凌晨2点` } }
    ],
    pharm: [
      { name:'연세약국', url:'https://maps.app.goo.gl/WYfxKz93Zym1xVHD9',
        alt:{ en:`Yonsei Pharmacy`, ja:`ヨンセ薬局`, zh:`延世药店` },
        d:{ en:`B1 of the LG Eclat building`, ko:`LG인천공항에클라트(Eclat) 건물 B1`, ja:`LG Eclatビルの地下1階`, zh:`LG Eclat大楼地下1层` } },
      { name:'연세공항의원', url:'https://maps.app.goo.gl/nTnBzeWuwZ9AMRke6',
        alt:{ en:`Yonsei Airport Clinic`, ja:`ヨンセ空港クリニック`, zh:`延世机场诊所` },
        d:{ en:`General practitioner (family medicine)`, ko:`일반의 (가정의학과 성격)`, ja:`一般内科（家庭医学）`, zh:`全科诊所（家庭医学）` } }
    ],
    etc: [
      { name:'씨메르', url:'https://maps.app.goo.gl/XumAbk59S1PwDNoAA',
        alt:{ en:`Cimer`, ja:`Cimer`, zh:`Cimer` },
        d:{ en:`Premium sauna & water park inside Paradise City Hotel. Paid entry.`, ko:`파라다이스시티 호텔 내 고급 사우나·워터파크. 유료 이용.`, ja:`パラダイスシティホテル内の高級サウナ・ウォーターパーク。有料。`, zh:`Paradise City酒店内的高级桑拿·水上乐园。付费使用。` } },
      { name:'Spa at Home (T1)', url:'https://maps.app.goo.gl/JkSEHz5cHR1ct6cWA',
        d:{ en:`Spa (Terminal 1)`, ko:`스파 (터미널 1)`, ja:`スパ（第1ターミナル）`, zh:`水疗（1号航站楼）` } },
      { name:'짐캐리 인천공항 1터미널역점', url:'https://maps.app.goo.gl/xztVJVPWy1wYeyrQA',
        alt:{ en:`Jimcarry`, ja:`ジムキャリー`, zh:`Jimcarry` },
        d:{ en:`Luggage storage (Incheon Airport T1 station) — conveniently near the airport railway to Seoul.`, ko:`짐 보관 서비스 (인천공항 1터미널역) - 서울로 가는 공항열차 근처라 이용이 편리해요.`, ja:`荷物預かりサービス（仁川空港第1ターミナル駅） — ソウル方面の空港鉄道の近くで便利です。`, zh:`行李寄存服务（仁川机场1号航站楼站） — 靠近前往首尔的机场铁路，非常方便。` } }
    ]
  };

window.GUIDE_DATA = { CATS: CATS, PLACES: PLACES };
