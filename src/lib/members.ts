export interface MemberLink {
	platform: 'youtube' | 'twitch' | 'twitter';
	url: string;
}

export interface Member {
	id: string;
	name: string;
	nameEn: string;
	image?: string;
	title: string;
	description: string;
	schedule: string;
	style: string;
	topics: string[];
	links: MemberLink[];
}

export const members: Member[] = [
	{
		id: 'meru',
		name: '黒羊める',
		nameEn: 'Meru',
		title: '一隻打工仔黑綿羊',
		description: '夢想是成為超酷大迷因',
		schedule: '每週最少三台，時間彈性',
		style: '全心全力做奇怪的事！',
		topics: ['解謎', '劇情向', '推理', '養成', '戀愛', '桌遊', '恐怖'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'unineko',
		name: '悠妮涅可',
		nameEn: 'Unineko',
		title: '來自獨角星的紫色貓貓',
		description: '聲音好聽的電波系貓貓，擅長把遊戲玩出不同的味道',
		schedule: '每週二・五・六 20:00~23:00',
		style: '聲音好聽的電波系貓貓，擅長把遊戲玩出不同的味道，喜歡和觀眾互動',
		topics: ['寶可夢', '各平台遊戲', '料理', '手做DIY', '開箱', '雜談', '卡牌遊戲', '桌遊'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'siroya',
		name: '希蘿亞',
		nameEn: 'Siroya',
		title: '四處旅遊，找尋各地美食',
		description: '元氣滿滿的治癒系精靈少女',
		schedule: '每周二・四 20:30 / 每周六 10:30',
		style: '甜美聲線、雜談領域廣泛、超認真少女、適合全年齡觀賞',
		topics: ['雜談', '美食', '旅遊', '遊戲', '盲盒', '手作DIY'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'kazeimo',
		name: '語風薯薯',
		nameEn: 'kazeimo',
		title: '致力成為偶像公司老闆',
		description: '使用魔王城征服世界！',
		schedule: '每周一・二・四・五 22:00~24:00',
		style: '元氣、主播賽評播報感、熱情正向、認真',
		topics: ['遊戲', '卡牌', '手遊', '動畫', 'Vtuber', '議題訪談'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'aisa',
		name: '愛紗公主',
		nameEn: 'Aisa Princess',
		title: '吃貨貓咪，貓瀰瀰王國社畜公主',
		description: '魔王城是我第二個家！',
		schedule: '不定期出沒於薯薯頻道',
		style: '做自己、輕鬆向，但是參加企劃會非常認真。可愛清楚系，歡迎餵食～',
		topics: ['唱歌', '甜點', '闇影詩章', '占卜', '文案', '手作', '食玩'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'usagi',
		name: '雪寶うさぎ',
		nameEn: 'Usagi',
		title: '天災級魔物小暴君',
		description: '無人成功逃出兔女王的魔掌',
		schedule: '每週直播5~6天，晚間8點開台',
		style: '吐槽調侃所有人，總被講是傲嬌雌小鬼，但都打死不會承認',
		topics: ['卡牌遊戲', '日本動畫', '動作遊戲', '雜談&企劃訪談', '繪圖'],
		links: [
			{ platform: 'twitch', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'esmea',
		name: '艾絲梅亞',
		nameEn: 'Esmea',
		title: '氣質台味己霸婚',
		description: '用好聽的聲音騙人入坑',
		schedule: '每週3~5天 20:00~22:30',
		style: '偶爾認真分享時事觀點，偶爾幽默玩弄觀眾，喜歡做猜謎題目嘲笑觀眾',
		topics: ['主題雜談', '冷知識', '綜藝向問答互動', '手作', '時事分享', '實鏡旅遊', '情境演繹'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitch', url: '#' }
		]
	},
	{
		id: 'murichan',
		name: '姆莉醬',
		nameEn: 'MuriChan',
		title: '身高6.9公分的牡蠣Vtuber',
		description: '熱愛諧音梗和世上奇怪的東西',
		schedule: '每週3~5天',
		style: '講話直爽節奏快、邏輯清晰富幽默、元氣熱情綜藝咖',
		topics: ['主題雜談', '生活分享', '活動企劃', '活動主持', '觀眾互動', '好物開箱', '創意料理', '即時吃播', '遊戲實況', '綜藝問答', '來賓訪談', 'ASMR'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'aesopdu',
		name: '伊索渡',
		nameEn: 'AesopDu',
		title: '來自月之神的祝福',
		description: '充滿魔力的小渡鴉降臨！！！',
		schedule: '突發（一~日）17:00~24:00',
		style: '你以為我很可愛嗎？我可是吐槽、搞笑、犯蠢擔當',
		topics: ['動作遊戲', '日本歐美動畫', '寶可夢相關'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'yuuta',
		name: '悠太翼',
		nameEn: 'Yuuta',
		title: '一位喜歡穿盔甲的程式設計師',
		description: '常常在直播上玩玩遊戲、唱唱歌',
		schedule: '每周一・二・四・六 22:30',
		style: '喜歡穿盔甲的程式設計師',
		topics: ['遊戲', '程式', '歌回', '雜談'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'yunyun',
		name: '呦呦',
		nameEn: 'Yunyun',
		title: '正在幫助主人的鹿娃娃',
		description: '假裝認真過生活！',
		schedule: '每周最少三次 20:30~23:00',
		style: '吐槽、任性鹿娃娃',
		topics: ['遊戲（恐怖）', '遊戲（動作）', '唱歌', '生活分享'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitter', url: '#' }
		]
	},
	{
		id: 'colamoon',
		name: '可樂月月',
		image: "/images/members/colamoon_profilepic.png",
		nameEn: 'ColaMoon',
		title: '愛拆家的哈士奇教主',
		description: '吃喝旅遊散播愛與歡樂',
		schedule: '每週一・二・四 18:00 / 每周三 09:00',
		style: '人間清醒智商在線、幽默包裝深度思辨、自由自在鬼靈精怪、好奇寶寶及時行樂',
		topics: ['旅遊探索', '戀愛冒險', '外景節目', '時事分析', '主題雜談', '互動企劃', '現場吃播', '遊戲實況', '甜甜歌回', '影劇解析'],
		links: [
			{ platform: 'youtube', url: '#' },
			{ platform: 'twitch', url: '#' }
		]
	}
];

export function getMemberById(id: string): Member | undefined {
	return members.find((m) => m.id === id);
}
