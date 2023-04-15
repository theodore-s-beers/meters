<script lang="ts" context="module">
	interface Meter {
		feet: string[];
		nameLat: string;
		nameFa: string;
		baseMeter: string;
	}

	export const meters: Meter[] = [
		{
			feet: ['˘˘¯˘', '˘˘¯˘', '˘˘¯˘', '˘˘¯˘'],
			nameLat: 'ramal mashkūl',
			nameFa: 'رمل مشکول',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯˘', '˘˘¯¯', '˘˘¯˘', '˘˘¯¯'],
			nameLat: 'ramal mashkūl makhbūn',
			nameFa: 'رمل مشکول مخبون',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯', '˘˘¯', '˘˘¯', '˘˘¯'],
			nameLat: 'mutadārik makhbūn',
			nameFa: 'متدارک مخبون',
			baseMeter: 'mutadārik'
		},
		{
			feet: ['˘˘¯˘', '¯˘¯¯', '˘˘¯˘', '¯˘¯¯'],
			nameLat: 'ramal mashkūl sālim',
			nameFa: 'رمل مشکول سالم',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯¯', '˘˘¯¯', '˘˘¯¯', '˘˘˜'],
			nameLat: 'ramal makhbūn maqṣūr',
			nameFa: 'رمل مخبون مقصور',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯¯', '˘˘¯¯', '˘¯˘¯'],
			nameLat: 'gharīb makhbūn',
			nameFa: 'غریب مخبون',
			baseMeter: 'gharīb'
		},
		{
			feet: ['˘˘¯¯', '˘¯˘¯', '˘˘˜'],
			nameLat: 'khafīf makhbūn maqṣūr',
			nameFa: 'خفیف مخبون مقصور',
			baseMeter: 'khafīf'
		},
		{
			feet: ['˘˘¯¯', '˘¯˘¯', '˘˘¯¯', '˘¯˘¯'],
			nameLat: 'khafīf makhbūn',
			nameFa: 'خفیف مخبون',
			baseMeter: 'khafīf'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯', '˘¯˘¯', '˘˘¯'],
			nameLat: 'mujtaṡṡ makhbūn makhbūn maḥẕūf',
			nameFa: 'مجتث مخبون مخبون محذوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯'],
			nameLat: 'mujtaṡṡ makhbūn maḥẕūf',
			nameFa: 'مجتث مخبون محذوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯¯'],
			nameLat: 'mujtaṡṡ makhbūn',
			nameFa: 'مجتث مخبون',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '¯¯'],
			nameLat: 'mujtaṡṡ makhbūn aṣlam',
			nameFa: 'مجتث مخبون اصلم',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘¯˘¯', '˘¯˘¯', '˘¯˘˜'],
			nameLat: 'hazaj maqbūż musabbagh',
			nameFa: 'هزج مقبوض مسبغ',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯˘¯', '¯˘˘¯', '˘¯˘¯', '¯˘˘¯'],
			nameLat: 'rajaz makhbūn maṭvī',
			nameFa: 'رجز مخبون مطوی',
			baseMeter: 'rajaz'
		},
		{
			feet: ['˘¯¯˘', '˘¯¯˘', '˘¯¯˘', '˘¯¯'],
			nameLat: 'hazaj makfūf maḥẕūf',
			nameFa: 'هزج مکفوف محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯˘', '¯˘˜', '˘¯¯˘', '¯˘˜'],
			nameLat: 'mużāri‘ makfūf maqṣūr',
			nameFa: 'مضارع مکفوف مقصور',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['˘¯¯', '˘¯¯', '˘¯¯', '˘¯'],
			nameLat: 'mutaqārib maḥẕūf',
			nameFa: 'متقارب محذوف',
			baseMeter: 'mutaqārib'
		},
		{
			feet: ['˘¯¯', '˘¯¯', '˘¯¯', '˘¯¯'],
			nameLat: 'mutaqārib sālim',
			nameFa: 'متقارب سالم',
			baseMeter: 'mutaqārib'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯', '˘¯¯¯', '˘¯¯'],
			nameLat: 'hazaj sālim maḥẕūf',
			nameFa: 'هزج سالم محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯'],
			nameLat: 'hazaj sālim (murabba‘)',
			nameFa: 'هزج سالم (مربع)',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '˘¯¯'],
			nameLat: 'hazaj maḥẕūf',
			nameFa: 'هزج محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '˘¯¯¯'],
			nameLat: 'hazaj sālim (musaddas)',
			nameFa: 'هزج سالم (مسدس)',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '˘¯¯¯', '˘¯¯¯'],
			nameLat: 'hazaj sālim (muṡamman)',
			nameFa: 'هزج سالم (مثمن)',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '¯˘¯¯'],
			nameLat: 'qarīb sālim',
			nameFa: 'قریب سالم',
			baseMeter: 'qarīb'
		},
		{
			feet: ['˘¯¯¯', '¯˘¯¯', '˘¯¯¯', '¯˘¯¯'],
			nameLat: 'mużāri‘ sālim',
			nameFa: 'مضارع سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯˘˘¯', '˘¯˘¯', '¯˘˘¯', '˘¯˘¯'],
			nameLat: 'rajaz maṭvī makhbūn',
			nameFa: 'رجز مطوی مخبون',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯˘˘¯', '¯˘˘¯', '¯˘˘¯', '¯˘˘¯'],
			nameLat: 'rajaz maṭvī',
			nameFa: 'رجز مطوی',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯˘˘¯', '¯˘˘¯', '¯˘¯'],
			nameLat: 'sarī‘ maṭvī makshūf',
			nameFa: 'سریع مطوی مکشوف',
			baseMeter: 'sarī‘'
		},
		{
			feet: ['¯˘˘¯', '¯˘¯˘', '¯˘˘¯', '¯'],
			nameLat: 'mujtaṡṡ maṭvī makfūf majḥūf',
			nameFa: 'مجتث مطوی مکفوف مجحوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['¯˘˘¯', '¯˘¯', '¯˘˘¯', '¯˘¯'],
			nameLat: 'munsariḥ maṭvī makshūf',
			nameFa: 'منسرح مطوی مکشوف',
			baseMeter: 'munsariḥ'
		},
		{
			feet: ['¯˘˘¯', '¯˘˜', '¯˘˘¯', '¯˘˜'],
			nameLat: 'munsariḥ maṭvī mawqūf',
			nameFa: 'منسرح مطوی موقوف',
			baseMeter: 'munsariḥ'
		},
		{
			feet: ['¯˘˘¯', '¯˘¯', '¯˘˘¯', '˜'],
			nameLat: 'munsariḥ maṭvī mawqūf majdū‘',
			nameFa: 'منسرح مطوی موقوف مجدوع',
			baseMeter: 'munsariḥ'
		},
		{
			feet: ['¯˘¯˘', '˘¯¯˘', '¯˘˜'],
			nameLat: 'mushākil makfūf maqṣūr',
			nameFa: 'مشاکل مکفوف مقصور',
			baseMeter: 'mushākil'
		},
		{
			feet: ['¯˘¯˘', '¯˘˘¯'],
			nameLat: 'muqtażab maṭvī',
			nameFa: 'مقتضب مطوی',
			baseMeter: 'muqtażab'
		},
		{
			feet: ['¯˘¯˘', '¯˘˘¯', '¯˘¯˘', '¯˘˘¯'],
			nameLat: 'muqtażab maṭvī (muṡamman)',
			nameFa: 'مقتضب مطوی (مثمن)',
			baseMeter: 'muqtażab'
		},
		{
			feet: ['¯˘¯', '˘¯¯', '¯˘¯', '˘¯¯'],
			nameLat: 'hazaj ashtar maḥẕūf',
			nameFa: 'هزج اشتر محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯˘¯', '˘¯¯¯', '¯˘¯', '˘¯¯¯'],
			nameLat: 'hazaj ashtar sālim',
			nameFa: 'هزج اشتر سالم',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯˘¯¯', '˘˘¯¯', '˘˘¯¯', '˘˘¯'],
			nameLat: 'ramal sālim makhbūn maḥẕūf',
			nameFa: 'رمل سالم مخبون محذوف',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '˘˘¯¯', '˘˘¯¯', '¯'],
			nameLat: 'ramal sālim makhbūn majḥūf',
			nameFa: 'رمل سالم مخبون مجحوف',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '˘¯˘¯', '˘˘¯'],
			nameLat: 'khafīf sālim makhbūn',
			nameFa: 'خفیف سالم مخبون',
			baseMeter: 'khafīf'
		},
		{
			feet: ['¯˘¯¯', '˘¯˘¯', '¯˜'],
			nameLat: 'khafīf sālim makhbūn aṣlam musabbagh',
			nameFa: 'خفیف سالم مخبون اصلم مسبغ',
			baseMeter: 'khafīf'
		},
		{
			feet: ['¯˘¯', '¯˘¯', '¯˘¯', '¯˘¯'],
			nameLat: 'mutadārik sālim',
			nameFa: 'متدارک سالم',
			baseMeter: 'mutadārik'
		},
		{
			feet: ['¯˘¯¯', '˘¯¯¯', '˘¯¯'],
			nameLat: 'mushākil maḥẕūf',
			nameFa: 'مشاکل محذوف',
			baseMeter: 'mushākil'
		},
		{
			feet: ['¯˘¯¯', '˘¯¯¯', '˘¯¯¯'],
			nameLat: 'mushākil sālim',
			nameFa: 'مشاکل سالم',
			baseMeter: 'mushākil'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯'],
			nameLat: 'ramal sālim (murabba‘)',
			nameFa: 'رمل سالم (مربع)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯', '¯˘¯¯', '¯˘¯'],
			nameLat: 'madīd sālim',
			nameFa: 'مدید سالم',
			baseMeter: 'madīd'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯'],
			nameLat: 'ramal maḥẕūf (musaddas)',
			nameFa: 'رمل محذوف (مسدس)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯'],
			nameLat: 'ramal sālim (musaddas)',
			nameFa: 'رمل سالم (مسدس)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯', '¯˘¯'],
			nameLat: 'ramal maḥẕūf (muṡamman)',
			nameFa: 'رمل محذوف (مثمن)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯', '¯˘¯¯'],
			nameLat: 'ramal sālim (muṡamman)',
			nameFa: 'رمل سالم (مثمن)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯¯˘¯'],
			nameLat: 'gharīb sālim',
			nameFa: 'غریب سالم',
			baseMeter: 'gharīb'
		},
		{
			feet: ['¯˘¯¯', '¯¯˘¯', '¯˘¯¯', '¯¯˘¯'],
			nameLat: 'khafīf sālim',
			nameFa: 'خفیف سالم',
			baseMeter: 'khafīf'
		},
		{
			feet: ['¯¯˘', '˘¯˘¯', '˘¯¯'],
			nameLat: 'hazaj akhrab maqbūż maḥẕūf',
			nameFa: 'هزج اخرب مقبوض محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘', '˘¯˘¯', '˘¯¯¯', '˜'],
			nameLat: 'hazaj akhrab maqbūż sālim azall',
			nameFa: 'هزج اخرب مقبوض سالم ازل',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘', '˘¯¯˘', '˘¯¯˘', '˘¯¯'],
			nameLat: 'hazaj akhrab makfūf maḥẕūf',
			nameFa: 'هزج اخرب مکفوف محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘', '˘¯¯˘', '¯˘¯¯'],
			nameLat: 'qarīb akhrab makfūf sālim',
			nameFa: 'قریب اخرب مکفوف سالم',
			baseMeter: 'qarīb'
		},
		{
			feet: ['¯¯˘', '˘¯¯¯', '¯¯˘', '˘¯¯¯'],
			nameLat: 'hazaj akhrab sālim',
			nameFa: 'هزج اخرب سالم',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯'],
			nameLat: 'mujtaṡṡ sālim makhbūn makhbūn maqṣūr',
			nameFa: 'مجتث سالم مخبون مخبون مقصور',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['¯¯˘', '¯˘¯˘', '˘¯¯˘', '¯˘¯'],
			nameLat: 'mużāri‘ akhrab makfūf maḥẕūf',
			nameFa: 'مضارع اخرب مکفوف محذوف',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘', '¯˘¯˘', '˘¯¯¯'],
			nameLat: 'mużāri‘ akhrab makfūf sālim',
			nameFa: 'مضارع اخرب مکفوف سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘', '¯˘¯¯', '˘¯¯˘', '¯˘¯¯'],
			nameLat: 'mużāri‘ akhrab sālim makfūf sālim',
			nameFa: 'مضارع اخرب سالم مکفوف سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘', '¯˘¯¯', '¯¯˘', '¯˘¯¯'],
			nameLat: 'mużāri‘ akhrab sālim',
			nameFa: 'مضارع اخرب سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘¯', '¯˘¯', '¯¯˘¯', '¯˘¯'],
			nameLat: 'basīṭ sālim',
			nameFa: 'بسیط سالم',
			baseMeter: 'basīṭ'
		},
		{
			feet: ['¯¯˘¯', '¯˘¯¯', '¯¯˘¯', '¯˘¯¯'],
			nameLat: 'mujtaṡṡ sālim',
			nameFa: 'مجتث سالم',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘˜'],
			nameLat: 'rajaz muẕāl (murabba‘)',
			nameFa: 'رجز مذال (مربع)',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘¯', '¯¯˘¯'],
			nameLat: 'rajaz sālim (musaddas)',
			nameFa: 'رجز سالم (مسدس)',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘¯', '¯¯˘¯', '¯¯˘¯'],
			nameLat: 'rajaz sālim (muṡamman)',
			nameFa: 'رجز سالم (مثمن)',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘¯', '¯¯¯˘'],
			nameLat: 'sarī‘ sālim',
			nameFa: 'سریع سالم',
			baseMeter: 'sarī‘'
		},
		{
			feet: ['¯¯', '˘¯¯', '¯¯', '˘¯¯'],
			nameLat: 'mutaqārib aṣlam sālim',
			nameFa: 'متقارب اصلم سالم',
			baseMeter: 'mutaqārib'
		},
		{
			feet: ['¯¯˘¯', '¯¯¯˘', '¯¯˘¯', '¯¯¯˘'],
			nameLat: 'munsariḥ sālim',
			nameFa: 'منسرح سالم',
			baseMeter: 'munsariḥ'
		}
	];
</script>
