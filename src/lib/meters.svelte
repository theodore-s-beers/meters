<script lang="ts" context="module">
	interface ExamplePoem {
		author: string;
		url: string;
	}

	interface Meter {
		feetLat: string[];
		feetFa: string[];
		nameLat: string;
		nameFa: string;
		baseMeter: string;
		example?: ExamplePoem;
	}

	export const meters: Meter[] = [
		{
			feetLat: ['˘˘¯˘', '˘˘¯˘', '˘˘¯˘', '˘˘¯˘'],
			feetFa: ['فعلات', 'فعلات', 'فعلات', 'فعلات'],
			nameLat: 'ramal mashkūl',
			nameFa: 'رمل مشکول',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['˘˘¯˘', '˘˘¯¯', '˘˘¯˘', '˘˘¯¯'],
			feetFa: ['فعلات', 'فعلاتن', 'فعلات', 'فعلاتن'],
			nameLat: 'ramal mashkūl makhbūn',
			nameFa: 'رمل مشکول مخبون',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['˘˘¯', '˘˘¯', '˘˘¯', '˘˘¯'],
			feetFa: ['فعلن', 'فعلن', 'فعلن', 'فعلن'],
			nameLat: 'mutadārik makhbūn',
			nameFa: 'متدارک مخبون',
			baseMeter: 'mutadārik'
		},
		{
			feetLat: ['˘˘¯˘', '¯˘¯¯', '˘˘¯˘', '¯˘¯¯'],
			feetFa: ['فعلات', 'فاعلاتن', 'فعلات', 'فاعلاتن'],
			nameLat: 'ramal mashkūl sālim',
			nameFa: 'رمل مشکول سالم',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['˘˘¯¯', '˘˘¯¯', '˘˘¯¯', '˘˘˜'],
			feetFa: ['فعلاتن', 'فعلاتن', 'فعلاتن', 'فعلن'],
			nameLat: 'ramal makhbūn maqṣūr',
			nameFa: 'رمل مخبون مقصور',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['˘˘¯¯', '˘˘¯¯', '˘¯˘¯'],
			feetFa: ['فعلاتن', 'فعلاتن', 'مفاعلن'],
			nameLat: 'gharīb makhbūn',
			nameFa: 'غریب مخبون',
			baseMeter: 'gharīb'
		},
		{
			feetLat: ['˘˘¯¯', '˘¯˘¯', '˘˘˜'],
			feetFa: ['فعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'khafīf makhbūn maqṣūr',
			nameFa: 'خفیف مخبون مقصور',
			baseMeter: 'khafīf'
		},
		{
			feetLat: ['˘˘¯¯', '˘¯˘¯', '˘˘¯¯', '˘¯˘¯'],
			feetFa: ['فعلاتن', 'مفاعلن', 'فعلاتن', 'مفاعلن'],
			nameLat: 'khafīf makhbūn',
			nameFa: 'خفیف مخبون',
			baseMeter: 'khafīf'
		},
		{
			feetLat: ['˘¯˘¯', '˘˘¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['مفاعلن', 'فعلن', 'مفاعلن', 'فعلن'],
			nameLat: 'mujtaṡṡ makhbūn makhbūn maḥẕūf',
			nameFa: 'مجتث مخبون مخبون محذوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feetLat: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['مفاعلن', 'فعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'mujtaṡṡ makhbūn maḥẕūf',
			nameFa: 'مجتث مخبون محذوف',
			baseMeter: 'mujtaṡṡ',
			example: { author: 'Rūdakī', url: 'https://ganjoor.net/roodaki/baghimande/sh45' }
		},
		{
			feetLat: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯¯'],
			feetFa: ['مفاعلن', 'فعلاتن', 'مفاعلن', 'فعلاتن'],
			nameLat: 'mujtaṡṡ makhbūn',
			nameFa: 'مجتث مخبون',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feetLat: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '¯¯'],
			feetFa: ['مفاعلن', 'فعلاتن', 'مفاعلن', 'فعْلن'],
			nameLat: 'mujtaṡṡ makhbūn aṣlam',
			nameFa: 'مجتث مخبون اصلم',
			baseMeter: 'mujtaṡṡ',
			example: { author: 'Rūdakī', url: 'https://ganjoor.net/roodaki/baghimande/sh45' }
		},
		{
			feetLat: ['˘¯˘¯', '˘¯˘¯', '˘¯˘¯', '˘¯˘˜'],
			feetFa: ['مفاعلن', 'مفاعلن', 'مفاعلن', 'مفاعلن'],
			nameLat: 'hazaj maqbūż musabbagh',
			nameFa: 'هزج مقبوض مسبغ',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['˘¯˘¯', '¯˘˘¯', '˘¯˘¯', '¯˘˘¯'],
			feetFa: ['مفاعلن', 'مفتعلن', 'مفاعلن', 'مفتعلن'],
			nameLat: 'rajaz makhbūn maṭvī',
			nameFa: 'رجز مخبون مطوی',
			baseMeter: 'rajaz'
		},
		{
			feetLat: ['˘¯¯˘', '˘¯¯˘', '˘¯¯˘', '˘¯¯'],
			feetFa: ['مفاعیل', 'مفاعیل', 'مفاعیل', 'فعولن'],
			nameLat: 'hazaj makfūf maḥẕūf',
			nameFa: 'هزج مکفوف محذوف',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['˘¯¯˘', '¯˘˜', '˘¯¯˘', '¯˘˜'],
			feetFa: ['مفاعیل', 'فاعلن', 'مفاعیل', 'فاعلن'],
			nameLat: 'mużāri‘ makfūf maqṣūr',
			nameFa: 'مضارع مکفوف مقصور',
			baseMeter: 'mużāri‘'
		},
		{
			feetLat: ['˘¯¯', '˘¯¯', '˘¯¯', '˘¯'],
			feetFa: ['فعولن', 'فعولن', 'فعولن', 'فعل'],
			nameLat: 'mutaqārib maḥẕūf',
			nameFa: 'متقارب محذوف',
			baseMeter: 'mutaqārib',
			example: { author: 'Firdawsī', url: 'https://ganjoor.net/ferdousi/shahname/sohrab/sh1' }
		},
		{
			feetLat: ['˘¯¯', '˘¯¯', '˘¯¯', '˘¯¯'],
			feetFa: ['فعولن', 'فعولن', 'فعولن', 'فعولن'],
			nameLat: 'mutaqārib sālim',
			nameFa: 'متقارب سالم',
			baseMeter: 'mutaqārib'
		},
		{
			feetLat: ['˘¯¯¯', '˘¯¯', '˘¯¯¯', '˘¯¯'],
			feetFa: ['مفاعیلن', 'فعولن', 'مفاعیلن', 'فعولن'],
			nameLat: 'hazaj sālim maḥẕūf',
			nameFa: 'هزج سالم محذوف',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['˘¯¯¯', '˘¯¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن'],
			nameLat: 'hazaj sālim (murabba‘)',
			nameFa: 'هزج سالم (مربع)',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['˘¯¯¯', '˘¯¯¯', '˘¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'فعولن'],
			nameLat: 'hazaj maḥẕūf',
			nameFa: 'هزج محذوف',
			baseMeter: 'hazaj',
			example: { author: 'Gurgānī', url: 'https://ganjoor.net/asad/veysoramin/sh53' }
		},
		{
			feetLat: ['˘¯¯¯', '˘¯¯¯', '˘¯¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'مفاعیلن'],
			nameLat: 'hazaj sālim (musaddas)',
			nameFa: 'هزج سالم (مسدس)',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['˘¯¯¯', '˘¯¯¯', '˘¯¯¯', '˘¯¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'مفاعیلن', 'مفاعیلن'],
			nameLat: 'hazaj sālim (muṡamman)',
			nameFa: 'هزج سالم (مثمن)',
			baseMeter: 'hazaj',
			example: { author: 'Ḥāfiẓ', url: 'https://ganjoor.net/hafez/ghazal/sh1' }
		},
		{
			feetLat: ['˘¯¯¯', '˘¯¯¯', '¯˘¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'فاعلاتن'],
			nameLat: 'qarīb sālim',
			nameFa: 'قریب سالم',
			baseMeter: 'qarīb'
		},
		{
			feetLat: ['˘¯¯¯', '¯˘¯¯', '˘¯¯¯', '¯˘¯¯'],
			feetFa: ['مفاعیلن', 'فاعلاتن', 'مفاعیلن', 'فاعلاتن'],
			nameLat: 'mużāri‘ sālim',
			nameFa: 'مضارع سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feetLat: ['¯˘˘¯', '˘¯˘¯', '¯˘˘¯', '˘¯˘¯'],
			feetFa: ['مفتعلن', 'مفاعلن', 'مفتعلن', 'مفاعلن'],
			nameLat: 'rajaz maṭvī makhbūn',
			nameFa: 'رجز مطوی مخبون',
			baseMeter: 'rajaz'
		},
		{
			feetLat: ['¯˘˘¯', '¯˘˘¯', '¯˘˘¯', '¯˘˘¯'],
			feetFa: ['مفتعلن', 'مفتعلن', 'مفتعلن', 'مفتعلن'],
			nameLat: 'rajaz maṭvī',
			nameFa: 'رجز مطوی',
			baseMeter: 'rajaz'
		},
		{
			feetLat: ['¯˘˘¯', '¯˘˘¯', '¯˘¯'],
			feetFa: ['مفتعلن', 'مفتعلن', 'فاعلن'],
			nameLat: 'sarī‘ maṭvī makshūf',
			nameFa: 'سریع مطوی مکشوف',
			baseMeter: 'sarī‘'
		},
		{
			feetLat: ['¯˘˘¯', '¯˘¯˘', '¯˘˘¯', '¯'],
			feetFa: ['مفتعلن', 'فاعلات', 'مفتعلن', 'فع'],
			nameLat: 'mujtaṡṡ maṭvī makfūf majḥūf',
			nameFa: 'مجتث مطوی مکفوف مجحوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feetLat: ['¯˘˘¯', '¯˘¯', '¯˘˘¯', '¯˘¯'],
			feetFa: ['مفتعلن', 'فاعلن', 'مفتعلن', 'فاعلن'],
			nameLat: 'munsariḥ maṭvī makshūf',
			nameFa: 'منسرح مطوی مکشوف',
			baseMeter: 'munsariḥ'
		},
		{
			feetLat: ['¯˘˘¯', '¯˘˜', '¯˘˘¯', '¯˘˜'],
			feetFa: ['مفتعلن', 'فاعلن', 'مفتعلن', 'فاعلن'],
			nameLat: 'munsariḥ maṭvī mawqūf',
			nameFa: 'منسرح مطوی موقوف',
			baseMeter: 'munsariḥ'
		},
		{
			feetLat: ['¯˘˘¯', '¯˘¯', '¯˘˘¯', '˜'],
			feetFa: ['مفتعلن', 'فاعلن', 'مفتعلن', 'فع'],
			nameLat: 'munsariḥ maṭvī mawqūf majdū‘',
			nameFa: 'منسرح مطوی موقوف مجدوع',
			baseMeter: 'munsariḥ'
		},
		{
			feetLat: ['¯˘¯˘', '˘¯¯˘', '¯˘˜'],
			feetFa: ['فاعلات', 'مفاعیل', 'فاعلن'],
			nameLat: 'mushākil makfūf maqṣūr',
			nameFa: 'مشاکل مکفوف مقصور',
			baseMeter: 'mushākil'
		},
		{
			feetLat: ['¯˘¯˘', '¯˘˘¯'],
			feetFa: ['فاعلات', 'مفتعلن'],
			nameLat: 'muqtażab maṭvī',
			nameFa: 'مقتضب مطوی',
			baseMeter: 'muqtażab'
		},
		{
			feetLat: ['¯˘¯˘', '¯˘˘¯', '¯˘¯˘', '¯˘˘¯'],
			feetFa: ['فاعلات', 'مفتعلن', 'فاعلات', 'مفتعلن'],
			nameLat: 'muqtażab maṭvī (muṡamman)',
			nameFa: 'مقتضب مطوی (مثمن)',
			baseMeter: 'muqtażab'
		},
		{
			feetLat: ['¯˘¯', '˘¯¯', '¯˘¯', '˘¯¯'],
			feetFa: ['فاعلن', 'فعولن', 'فاعلن', 'فعولن'],
			nameLat: 'hazaj ashtar maḥẕūf',
			nameFa: 'هزج اشتر محذوف',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['¯˘¯', '˘¯¯¯', '¯˘¯', '˘¯¯¯'],
			feetFa: ['فاعلن', 'مفاعیلن', 'فاعلن', 'مفاعیلن'],
			nameLat: 'hazaj ashtar sālim',
			nameFa: 'هزج اشتر سالم',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['¯˘¯¯', '˘˘¯¯', '˘˘¯¯', '˘˘¯'],
			feetFa: ['فاعلاتن', 'فعلاتن', 'فعلاتن', 'فعلن'],
			nameLat: 'ramal sālim makhbūn maḥẕūf',
			nameFa: 'رمل سالم مخبون محذوف',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['¯˘¯¯', '˘˘¯¯', '˘˘¯¯', '¯'],
			feetFa: ['فاعلاتن', 'فعلاتن', 'فعلاتن', 'فع'],
			nameLat: 'ramal sālim makhbūn majḥūf',
			nameFa: 'رمل سالم مخبون مجحوف',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['¯˘¯¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['فاعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'khafīf sālim makhbūn',
			nameFa: 'خفیف سالم مخبون',
			baseMeter: 'khafīf',
			example: { author: 'Niẓāmī', url: 'https://ganjoor.net/nezami/5ganj/7peykar/sh24' }
		},
		{
			feetLat: ['¯˘¯¯', '˘¯˘¯', '¯˜'],
			feetFa: ['فاعلاتن', 'مفاعلن', 'فعْلن'],
			nameLat: 'khafīf sālim makhbūn aṣlam musabbagh',
			nameFa: 'خفیف سالم مخبون اصلم مسبغ',
			baseMeter: 'khafīf'
		},
		{
			feetLat: ['¯˘¯', '¯˘¯', '¯˘¯', '¯˘¯'],
			feetFa: ['فاعلن', 'فاعلن', 'فاعلن', 'فاعلن'],
			nameLat: 'mutadārik sālim',
			nameFa: 'متدارک سالم',
			baseMeter: 'mutadārik'
		},
		{
			feetLat: ['¯˘¯¯', '˘¯¯¯', '˘¯¯'],
			feetFa: ['فاعلاتن', 'مفاعیلن', 'فعولن'],
			nameLat: 'mushākil maḥẕūf',
			nameFa: 'مشاکل محذوف',
			baseMeter: 'mushākil'
		},
		{
			feetLat: ['¯˘¯¯', '˘¯¯¯', '˘¯¯¯'],
			feetFa: ['فاعلاتن', 'مفاعیلن', 'مفاعیلن'],
			nameLat: 'mushākil sālim',
			nameFa: 'مشاکل سالم',
			baseMeter: 'mushākil'
		},
		{
			feetLat: ['¯˘¯¯', '¯˘¯¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن'],
			nameLat: 'ramal sālim (murabba‘)',
			nameFa: 'رمل سالم (مربع)',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['¯˘¯¯', '¯˘¯', '¯˘¯¯', '¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلن', 'فاعلاتن', 'فاعلن'],
			nameLat: 'madīd sālim',
			nameFa: 'مدید سالم',
			baseMeter: 'madīd'
		},
		{
			feetLat: ['¯˘¯¯', '¯˘¯¯', '¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلن'],
			nameLat: 'ramal maḥẕūf (musaddas)',
			nameFa: 'رمل محذوف (مسدس)',
			baseMeter: 'ramal',
			example: { author: 'Mawlānā', url: 'https://ganjoor.net/moulavi/masnavi/daftar1/sh1' }
		},
		{
			feetLat: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلاتن'],
			nameLat: 'ramal sālim (musaddas)',
			nameFa: 'رمل سالم (مسدس)',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯', '¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلاتن', 'فاعلن'],
			nameLat: 'ramal maḥẕūf (muṡamman)',
			nameFa: 'رمل محذوف (مثمن)',
			baseMeter: 'ramal',
			example: { author: 'Ṣā’ib', url: 'https://ganjoor.net/saeb/divan-saeb/ghazalkasa/sh6714' }
		},
		{
			feetLat: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯', '¯˘¯¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلاتن', 'فاعلاتن'],
			nameLat: 'ramal sālim (muṡamman)',
			nameFa: 'رمل سالم (مثمن)',
			baseMeter: 'ramal'
		},
		{
			feetLat: ['¯˘¯¯', '¯˘¯¯', '¯¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'مستفعلن'],
			nameLat: 'gharīb sālim',
			nameFa: 'غریب سالم',
			baseMeter: 'gharīb'
		},
		{
			feetLat: ['¯˘¯¯', '¯¯˘¯', '¯˘¯¯', '¯¯˘¯'],
			feetFa: ['فاعلاتن', 'مستفعلن', 'فاعلاتن', 'مستفعلن'],
			nameLat: 'khafīf sālim',
			nameFa: 'خفیف سالم',
			baseMeter: 'khafīf'
		},
		{
			feetLat: ['¯¯˘', '˘¯˘¯', '˘¯¯'],
			feetFa: ['مفعول', 'مفاعلن', 'فعولن'],
			nameLat: 'hazaj akhrab maqbūż maḥẕūf',
			nameFa: 'هزج اخرب مقبوض محذوف',
			baseMeter: 'hazaj',
			example: { author: 'Niẓāmī', url: 'https://ganjoor.net/nezami/5ganj/leyli-majnoon/sh12' }
		},
		{
			feetLat: ['¯¯˘', '˘¯˘¯', '˘¯¯¯', '˜'],
			feetFa: ['مفعول', 'مفاعلن', 'مفاعیلن', 'فع'],
			nameLat: 'hazaj akhrab maqbūż sālim azall',
			nameFa: 'هزج اخرب مقبوض سالم ازل',
			baseMeter: 'hazaj',
			example: { author: 'Kamāl Ismā‘īl', url: 'https://ganjoor.net/kamal/robaeek-kamal/sh22' }
		},
		{
			feetLat: ['¯¯˘', '˘¯¯˘', '˘¯¯˘', '˘¯¯'],
			feetFa: ['مفعول', 'مفاعیل', 'مفاعیل', 'فعولن'],
			nameLat: 'hazaj akhrab makfūf maḥẕūf',
			nameFa: 'هزج اخرب مکفوف محذوف',
			baseMeter: 'hazaj',
			example: { author: 'Shaykh Bahā’ī', url: 'https://ganjoor.net/bahaee/divan-baha/mokhammas' }
		},
		{
			feetLat: ['¯¯˘', '˘¯¯˘', '¯˘¯¯'],
			feetFa: ['مفعول', 'مفاعیل', 'فاعلاتن'],
			nameLat: 'qarīb akhrab makfūf sālim',
			nameFa: 'قریب اخرب مکفوف سالم',
			baseMeter: 'qarīb'
		},
		{
			feetLat: ['¯¯˘', '˘¯¯¯', '¯¯˘', '˘¯¯¯'],
			feetFa: ['مفعول', 'مفاعیلن', 'مفعول', 'مفاعیلن'],
			nameLat: 'hazaj akhrab sālim',
			nameFa: 'هزج اخرب سالم',
			baseMeter: 'hazaj'
		},
		{
			feetLat: ['¯¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['مستفعلن', 'فعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'mujtaṡṡ sālim makhbūn makhbūn maqṣūr',
			nameFa: 'مجتث سالم مخبون مخبون مقصور',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feetLat: ['¯¯˘', '¯˘¯˘', '˘¯¯˘', '¯˘¯'],
			feetFa: ['مفعول', 'فاعلات', 'مفاعیل', 'فاعلن'],
			nameLat: 'mużāri‘ akhrab makfūf maḥẕūf',
			nameFa: 'مضارع اخرب مکفوف محذوف',
			baseMeter: 'mużāri‘'
		},
		{
			feetLat: ['¯¯˘', '¯˘¯˘', '˘¯¯¯'],
			feetFa: ['مفعول', 'فاعلات', 'مفاعیلن'],
			nameLat: 'mużāri‘ akhrab makfūf sālim',
			nameFa: 'مضارع اخرب مکفوف سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feetLat: ['¯¯˘', '¯˘¯¯', '˘¯¯˘', '¯˘¯¯'],
			feetFa: ['مفعول', 'فاعلاتن', 'مفاعیل', 'فاعلاتن'],
			nameLat: 'mużāri‘ akhrab sālim makfūf sālim',
			nameFa: 'مضارع اخرب سالم مکفوف سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feetLat: ['¯¯˘', '¯˘¯¯', '¯¯˘', '¯˘¯¯'],
			feetFa: ['مفعول', 'فاعلاتن', 'مفعول', 'فاعلاتن'],
			nameLat: 'mużāri‘ akhrab sālim',
			nameFa: 'مضارع اخرب سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feetLat: ['¯¯˘¯', '¯˘¯', '¯¯˘¯', '¯˘¯'],
			feetFa: ['مستفعلن', 'فاعلن', 'مستفعلن', 'فاعلن'],
			nameLat: 'basīṭ sālim',
			nameFa: 'بسیط سالم',
			baseMeter: 'basīṭ'
		},
		{
			feetLat: ['¯¯˘¯', '¯˘¯¯', '¯¯˘¯', '¯˘¯¯'],
			feetFa: ['مستفعلن', 'فاعلاتن', 'مستفعلن', 'فاعلاتن'],
			nameLat: 'mujtaṡṡ sālim',
			nameFa: 'مجتث سالم',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feetLat: ['¯¯˘¯', '¯¯˘˜'],
			feetFa: ['مستفعلن', 'مستفعلن'],
			nameLat: 'rajaz muẕāl (murabba‘)',
			nameFa: 'رجز مذال (مربع)',
			baseMeter: 'rajaz'
		},
		{
			feetLat: ['¯¯˘¯', '¯¯˘¯', '¯¯˘¯'],
			feetFa: ['مستفعلن', 'مستفعلن', 'مستفعلن'],
			nameLat: 'rajaz sālim (musaddas)',
			nameFa: 'رجز سالم (مسدس)',
			baseMeter: 'rajaz'
		},
		{
			feetLat: ['¯¯˘¯', '¯¯˘¯', '¯¯˘¯', '¯¯˘¯'],
			feetFa: ['مستفعلن', 'مستفعلن', 'مستفعلن', 'مستفعلن'],
			nameLat: 'rajaz sālim (muṡamman)',
			nameFa: 'رجز سالم (مثمن)',
			baseMeter: 'rajaz',
			example: { author: 'Mawlānā', url: 'https://ganjoor.net/moulavi/shams/ghazalsh/sh533' }
		},
		{
			feetLat: ['¯¯˘¯', '¯¯˘¯', '¯¯¯˘'],
			feetFa: ['مستفعلن', 'مستفعلن', 'مفعولات'],
			nameLat: 'sarī‘ sālim',
			nameFa: 'سریع سالم',
			baseMeter: 'sarī‘'
		},
		{
			feetLat: ['¯¯', '˘¯¯', '¯¯', '˘¯¯'],
			feetFa: ['فعْلن', 'فعولن', 'فعْلن', 'فعولن'],
			nameLat: 'mutaqārib aṣlam sālim',
			nameFa: 'متقارب اصلم سالم',
			baseMeter: 'mutaqārib'
		},
		{
			feetLat: ['¯¯˘¯', '¯¯¯˘', '¯¯˘¯', '¯¯¯˘'],
			feetFa: ['مستفعلن', 'مفعولات', 'مستفعلن', 'مفعولات'],
			nameLat: 'munsariḥ sālim',
			nameFa: 'منسرح سالم',
			baseMeter: 'munsariḥ'
		}
	];
</script>
