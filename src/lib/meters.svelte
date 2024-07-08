<script lang="ts" context="module">
	interface Meter {
		feet: string[];
		feetFa: string[];
		nameLat: string;
		nameFa: string;
		baseMeter: string;
	}

	export const meters: Meter[] = [
		{
			feet: ['˘˘¯˘', '˘˘¯˘', '˘˘¯˘', '˘˘¯˘'],
			feetFa: ['فعلات', 'فعلات', 'فعلات', 'فعلات'],
			nameLat: 'ramal mashkūl',
			nameFa: 'رمل مشکول',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯˘', '˘˘¯¯', '˘˘¯˘', '˘˘¯¯'],
			feetFa: ['فعلات', 'فعلاتن', 'فعلات', 'فعلاتن'],
			nameLat: 'ramal mashkūl makhbūn',
			nameFa: 'رمل مشکول مخبون',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯', '˘˘¯', '˘˘¯', '˘˘¯'],
			feetFa: ['فعلن', 'فعلن', 'فعلن', 'فعلن'],
			nameLat: 'mutadārik makhbūn',
			nameFa: 'متدارک مخبون',
			baseMeter: 'mutadārik'
		},
		{
			feet: ['˘˘¯˘', '¯˘¯¯', '˘˘¯˘', '¯˘¯¯'],
			feetFa: ['فعلات', 'فاعلاتن', 'فعلات', 'فاعلاتن'],
			nameLat: 'ramal mashkūl sālim',
			nameFa: 'رمل مشکول سالم',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯¯', '˘˘¯¯', '˘˘¯¯', '˘˘˜'],
			feetFa: ['فعلاتن', 'فعلاتن', 'فعلاتن', 'فعلن'],
			nameLat: 'ramal makhbūn maqṣūr',
			nameFa: 'رمل مخبون مقصور',
			baseMeter: 'ramal'
		},
		{
			feet: ['˘˘¯¯', '˘˘¯¯', '˘¯˘¯'],
			feetFa: ['فعلاتن', 'فعلاتن', 'مفاعلن'],
			nameLat: 'gharīb makhbūn',
			nameFa: 'غریب مخبون',
			baseMeter: 'gharīb'
		},
		{
			feet: ['˘˘¯¯', '˘¯˘¯', '˘˘˜'],
			feetFa: ['فعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'khafīf makhbūn maqṣūr',
			nameFa: 'خفیف مخبون مقصور',
			baseMeter: 'khafīf'
		},
		{
			feet: ['˘˘¯¯', '˘¯˘¯', '˘˘¯¯', '˘¯˘¯'],
			feetFa: ['فعلاتن', 'مفاعلن', 'فعلاتن', 'مفاعلن'],
			nameLat: 'khafīf makhbūn',
			nameFa: 'خفیف مخبون',
			baseMeter: 'khafīf'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['مفاعلن', 'فعلن', 'مفاعلن', 'فعلن'],
			nameLat: 'mujtaṡṡ makhbūn makhbūn maḥẕūf',
			nameFa: 'مجتث مخبون مخبون محذوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['مفاعلن', 'فعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'mujtaṡṡ makhbūn maḥẕūf',
			nameFa: 'مجتث مخبون محذوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯¯'],
			feetFa: ['مفاعلن', 'فعلاتن', 'مفاعلن', 'فعلاتن'],
			nameLat: 'mujtaṡṡ makhbūn',
			nameFa: 'مجتث مخبون',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘˘¯¯', '˘¯˘¯', '¯¯'],
			feetFa: ['مفاعلن', 'فعلاتن', 'مفاعلن', 'فعْلن'],
			nameLat: 'mujtaṡṡ makhbūn aṣlam',
			nameFa: 'مجتث مخبون اصلم',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['˘¯˘¯', '˘¯˘¯', '˘¯˘¯', '˘¯˘˜'],
			feetFa: ['مفاعلن', 'مفاعلن', 'مفاعلن', 'مفاعلن'],
			nameLat: 'hazaj maqbūż musabbagh',
			nameFa: 'هزج مقبوض مسبغ',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯˘¯', '¯˘˘¯', '˘¯˘¯', '¯˘˘¯'],
			feetFa: ['مفاعلن', 'مفتعلن', 'مفاعلن', 'مفتعلن'],
			nameLat: 'rajaz makhbūn maṭvī',
			nameFa: 'رجز مخبون مطوی',
			baseMeter: 'rajaz'
		},
		{
			feet: ['˘¯¯˘', '˘¯¯˘', '˘¯¯˘', '˘¯¯'],
			feetFa: ['مفاعیل', 'مفاعیل', 'مفاعیل', 'فعولن'],
			nameLat: 'hazaj makfūf maḥẕūf',
			nameFa: 'هزج مکفوف محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯˘', '¯˘˜', '˘¯¯˘', '¯˘˜'],
			feetFa: ['مفاعیل', 'فاعلن', 'مفاعیل', 'فاعلن'],
			nameLat: 'mużāri‘ makfūf maqṣūr',
			nameFa: 'مضارع مکفوف مقصور',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['˘¯¯', '˘¯¯', '˘¯¯', '˘¯'],
			feetFa: ['فعولن', 'فعولن', 'فعولن', 'فعل'],
			nameLat: 'mutaqārib maḥẕūf',
			nameFa: 'متقارب محذوف',
			baseMeter: 'mutaqārib'
		},
		{
			feet: ['˘¯¯', '˘¯¯', '˘¯¯', '˘¯¯'],
			feetFa: ['فعولن', 'فعولن', 'فعولن', 'فعولن'],
			nameLat: 'mutaqārib sālim',
			nameFa: 'متقارب سالم',
			baseMeter: 'mutaqārib'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯', '˘¯¯¯', '˘¯¯'],
			feetFa: ['مفاعیلن', 'فعولن', 'مفاعیلن', 'فعولن'],
			nameLat: 'hazaj sālim maḥẕūf',
			nameFa: 'هزج سالم محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن'],
			nameLat: 'hazaj sālim (murabba‘)',
			nameFa: 'هزج سالم (مربع)',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '˘¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'فعولن'],
			nameLat: 'hazaj maḥẕūf',
			nameFa: 'هزج محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '˘¯¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'مفاعیلن'],
			nameLat: 'hazaj sālim (musaddas)',
			nameFa: 'هزج سالم (مسدس)',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '˘¯¯¯', '˘¯¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'مفاعیلن', 'مفاعیلن'],
			nameLat: 'hazaj sālim (muṡamman)',
			nameFa: 'هزج سالم (مثمن)',
			baseMeter: 'hazaj'
		},
		{
			feet: ['˘¯¯¯', '˘¯¯¯', '¯˘¯¯'],
			feetFa: ['مفاعیلن', 'مفاعیلن', 'فاعلاتن'],
			nameLat: 'qarīb sālim',
			nameFa: 'قریب سالم',
			baseMeter: 'qarīb'
		},
		{
			feet: ['˘¯¯¯', '¯˘¯¯', '˘¯¯¯', '¯˘¯¯'],
			feetFa: ['مفاعیلن', 'فاعلاتن', 'مفاعیلن', 'فاعلاتن'],
			nameLat: 'mużāri‘ sālim',
			nameFa: 'مضارع سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯˘˘¯', '˘¯˘¯', '¯˘˘¯', '˘¯˘¯'],
			feetFa: ['مفتعلن', 'مفاعلن', 'مفتعلن', 'مفاعلن'],
			nameLat: 'rajaz maṭvī makhbūn',
			nameFa: 'رجز مطوی مخبون',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯˘˘¯', '¯˘˘¯', '¯˘˘¯', '¯˘˘¯'],
			feetFa: ['مفتعلن', 'مفتعلن', 'مفتعلن', 'مفتعلن'],
			nameLat: 'rajaz maṭvī',
			nameFa: 'رجز مطوی',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯˘˘¯', '¯˘˘¯', '¯˘¯'],
			feetFa: ['مفتعلن', 'مفتعلن', 'فاعلن'],
			nameLat: 'sarī‘ maṭvī makshūf',
			nameFa: 'سریع مطوی مکشوف',
			baseMeter: 'sarī‘'
		},
		{
			feet: ['¯˘˘¯', '¯˘¯˘', '¯˘˘¯', '¯'],
			feetFa: ['مفتعلن', 'فاعلات', 'مفتعلن', 'فع'],
			nameLat: 'mujtaṡṡ maṭvī makfūf majḥūf',
			nameFa: 'مجتث مطوی مکفوف مجحوف',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['¯˘˘¯', '¯˘¯', '¯˘˘¯', '¯˘¯'],
			feetFa: ['مفتعلن', 'فاعلن', 'مفتعلن', 'فاعلن'],
			nameLat: 'munsariḥ maṭvī makshūf',
			nameFa: 'منسرح مطوی مکشوف',
			baseMeter: 'munsariḥ'
		},
		{
			feet: ['¯˘˘¯', '¯˘˜', '¯˘˘¯', '¯˘˜'],
			feetFa: ['مفتعلن', 'فاعلن', 'مفتعلن', 'فاعلن'],
			nameLat: 'munsariḥ maṭvī mawqūf',
			nameFa: 'منسرح مطوی موقوف',
			baseMeter: 'munsariḥ'
		},
		{
			feet: ['¯˘˘¯', '¯˘¯', '¯˘˘¯', '˜'],
			feetFa: ['مفتعلن', 'فاعلن', 'مفتعلن', 'فع'],
			nameLat: 'munsariḥ maṭvī mawqūf majdū‘',
			nameFa: 'منسرح مطوی موقوف مجدوع',
			baseMeter: 'munsariḥ'
		},
		{
			feet: ['¯˘¯˘', '˘¯¯˘', '¯˘˜'],
			feetFa: ['فاعلات', 'مفاعیل', 'فاعلن'],
			nameLat: 'mushākil makfūf maqṣūr',
			nameFa: 'مشاکل مکفوف مقصور',
			baseMeter: 'mushākil'
		},
		{
			feet: ['¯˘¯˘', '¯˘˘¯'],
			feetFa: ['فاعلات', 'مفتعلن'],
			nameLat: 'muqtażab maṭvī',
			nameFa: 'مقتضب مطوی',
			baseMeter: 'muqtażab'
		},
		{
			feet: ['¯˘¯˘', '¯˘˘¯', '¯˘¯˘', '¯˘˘¯'],
			feetFa: ['فاعلات', 'مفتعلن', 'فاعلات', 'مفتعلن'],
			nameLat: 'muqtażab maṭvī (muṡamman)',
			nameFa: 'مقتضب مطوی (مثمن)',
			baseMeter: 'muqtażab'
		},
		{
			feet: ['¯˘¯', '˘¯¯', '¯˘¯', '˘¯¯'],
			feetFa: ['فاعلن', 'فعولن', 'فاعلن', 'فعولن'],
			nameLat: 'hazaj ashtar maḥẕūf',
			nameFa: 'هزج اشتر محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯˘¯', '˘¯¯¯', '¯˘¯', '˘¯¯¯'],
			feetFa: ['فاعلن', 'مفاعیلن', 'فاعلن', 'مفاعیلن'],
			nameLat: 'hazaj ashtar sālim',
			nameFa: 'هزج اشتر سالم',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯˘¯¯', '˘˘¯¯', '˘˘¯¯', '˘˘¯'],
			feetFa: ['فاعلاتن', 'فعلاتن', 'فعلاتن', 'فعلن'],
			nameLat: 'ramal sālim makhbūn maḥẕūf',
			nameFa: 'رمل سالم مخبون محذوف',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '˘˘¯¯', '˘˘¯¯', '¯'],
			feetFa: ['فاعلاتن', 'فعلاتن', 'فعلاتن', 'فع'],
			nameLat: 'ramal sālim makhbūn majḥūf',
			nameFa: 'رمل سالم مخبون مجحوف',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['فاعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'khafīf sālim makhbūn',
			nameFa: 'خفیف سالم مخبون',
			baseMeter: 'khafīf'
		},
		{
			feet: ['¯˘¯¯', '˘¯˘¯', '¯˜'],
			feetFa: ['فاعلاتن', 'مفاعلن', 'فعْلن'],
			nameLat: 'khafīf sālim makhbūn aṣlam musabbagh',
			nameFa: 'خفیف سالم مخبون اصلم مسبغ',
			baseMeter: 'khafīf'
		},
		{
			feet: ['¯˘¯', '¯˘¯', '¯˘¯', '¯˘¯'],
			feetFa: ['فاعلن', 'فاعلن', 'فاعلن', 'فاعلن'],
			nameLat: 'mutadārik sālim',
			nameFa: 'متدارک سالم',
			baseMeter: 'mutadārik'
		},
		{
			feet: ['¯˘¯¯', '˘¯¯¯', '˘¯¯'],
			feetFa: ['فاعلاتن', 'مفاعیلن', 'فعولن'],
			nameLat: 'mushākil maḥẕūf',
			nameFa: 'مشاکل محذوف',
			baseMeter: 'mushākil'
		},
		{
			feet: ['¯˘¯¯', '˘¯¯¯', '˘¯¯¯'],
			feetFa: ['فاعلاتن', 'مفاعیلن', 'مفاعیلن'],
			nameLat: 'mushākil sālim',
			nameFa: 'مشاکل سالم',
			baseMeter: 'mushākil'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن'],
			nameLat: 'ramal sālim (murabba‘)',
			nameFa: 'رمل سالم (مربع)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯', '¯˘¯¯', '¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلن', 'فاعلاتن', 'فاعلن'],
			nameLat: 'madīd sālim',
			nameFa: 'مدید سالم',
			baseMeter: 'madīd'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلن'],
			nameLat: 'ramal maḥẕūf (musaddas)',
			nameFa: 'رمل محذوف (مسدس)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلاتن'],
			nameLat: 'ramal sālim (musaddas)',
			nameFa: 'رمل سالم (مسدس)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯', '¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلاتن', 'فاعلن'],
			nameLat: 'ramal maḥẕūf (muṡamman)',
			nameFa: 'رمل محذوف (مثمن)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯˘¯¯', '¯˘¯¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'فاعلاتن', 'فاعلاتن'],
			nameLat: 'ramal sālim (muṡamman)',
			nameFa: 'رمل سالم (مثمن)',
			baseMeter: 'ramal'
		},
		{
			feet: ['¯˘¯¯', '¯˘¯¯', '¯¯˘¯'],
			feetFa: ['فاعلاتن', 'فاعلاتن', 'مستفعلن'],
			nameLat: 'gharīb sālim',
			nameFa: 'غریب سالم',
			baseMeter: 'gharīb'
		},
		{
			feet: ['¯˘¯¯', '¯¯˘¯', '¯˘¯¯', '¯¯˘¯'],
			feetFa: ['فاعلاتن', 'مستفعلن', 'فاعلاتن', 'مستفعلن'],
			nameLat: 'khafīf sālim',
			nameFa: 'خفیف سالم',
			baseMeter: 'khafīf'
		},
		{
			feet: ['¯¯˘', '˘¯˘¯', '˘¯¯'],
			feetFa: ['مفعول', 'مفاعلن', 'فعولن'],
			nameLat: 'hazaj akhrab maqbūż maḥẕūf',
			nameFa: 'هزج اخرب مقبوض محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘', '˘¯˘¯', '˘¯¯¯', '˜'],
			feetFa: ['مفعول', 'مفاعلن', 'مفاعیلن', 'فع'],
			nameLat: 'hazaj akhrab maqbūż sālim azall',
			nameFa: 'هزج اخرب مقبوض سالم ازل',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘', '˘¯¯˘', '˘¯¯˘', '˘¯¯'],
			feetFa: ['مفعول', 'مفاعیل', 'مفاعیل', 'فعولن'],
			nameLat: 'hazaj akhrab makfūf maḥẕūf',
			nameFa: 'هزج اخرب مکفوف محذوف',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘', '˘¯¯˘', '¯˘¯¯'],
			feetFa: ['مفعول', 'مفاعیل', 'فاعلاتن'],
			nameLat: 'qarīb akhrab makfūf sālim',
			nameFa: 'قریب اخرب مکفوف سالم',
			baseMeter: 'qarīb'
		},
		{
			feet: ['¯¯˘', '˘¯¯¯', '¯¯˘', '˘¯¯¯'],
			feetFa: ['مفعول', 'مفاعیلن', 'مفعول', 'مفاعیلن'],
			nameLat: 'hazaj akhrab sālim',
			nameFa: 'هزج اخرب سالم',
			baseMeter: 'hazaj'
		},
		{
			feet: ['¯¯˘¯', '˘˘¯¯', '˘¯˘¯', '˘˘¯'],
			feetFa: ['مستفعلن', 'فعلاتن', 'مفاعلن', 'فعلن'],
			nameLat: 'mujtaṡṡ sālim makhbūn makhbūn maqṣūr',
			nameFa: 'مجتث سالم مخبون مخبون مقصور',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['¯¯˘', '¯˘¯˘', '˘¯¯˘', '¯˘¯'],
			feetFa: ['مفعول', 'فاعلات', 'مفاعیل', 'فاعلن'],
			nameLat: 'mużāri‘ akhrab makfūf maḥẕūf',
			nameFa: 'مضارع اخرب مکفوف محذوف',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘', '¯˘¯˘', '˘¯¯¯'],
			feetFa: ['مفعول', 'فاعلات', 'مفاعیلن'],
			nameLat: 'mużāri‘ akhrab makfūf sālim',
			nameFa: 'مضارع اخرب مکفوف سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘', '¯˘¯¯', '˘¯¯˘', '¯˘¯¯'],
			feetFa: ['مفعول', 'فاعلاتن', 'مفاعیل', 'فاعلاتن'],
			nameLat: 'mużāri‘ akhrab sālim makfūf sālim',
			nameFa: 'مضارع اخرب سالم مکفوف سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘', '¯˘¯¯', '¯¯˘', '¯˘¯¯'],
			feetFa: ['مفعول', 'فاعلاتن', 'مفعول', 'فاعلاتن'],
			nameLat: 'mużāri‘ akhrab sālim',
			nameFa: 'مضارع اخرب سالم',
			baseMeter: 'mużāri‘'
		},
		{
			feet: ['¯¯˘¯', '¯˘¯', '¯¯˘¯', '¯˘¯'],
			feetFa: ['مستفعلن', 'فاعلن', 'مستفعلن', 'فاعلن'],
			nameLat: 'basīṭ sālim',
			nameFa: 'بسیط سالم',
			baseMeter: 'basīṭ'
		},
		{
			feet: ['¯¯˘¯', '¯˘¯¯', '¯¯˘¯', '¯˘¯¯'],
			feetFa: ['مستفعلن', 'فاعلاتن', 'مستفعلن', 'فاعلاتن'],
			nameLat: 'mujtaṡṡ sālim',
			nameFa: 'مجتث سالم',
			baseMeter: 'mujtaṡṡ'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘˜'],
			feetFa: ['مستفعلن', 'مستفعلن'],
			nameLat: 'rajaz muẕāl (murabba‘)',
			nameFa: 'رجز مذال (مربع)',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘¯', '¯¯˘¯'],
			feetFa: ['مستفعلن', 'مستفعلن', 'مستفعلن'],
			nameLat: 'rajaz sālim (musaddas)',
			nameFa: 'رجز سالم (مسدس)',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘¯', '¯¯˘¯', '¯¯˘¯'],
			feetFa: ['مستفعلن', 'مستفعلن', 'مستفعلن', 'مستفعلن'],
			nameLat: 'rajaz sālim (muṡamman)',
			nameFa: 'رجز سالم (مثمن)',
			baseMeter: 'rajaz'
		},
		{
			feet: ['¯¯˘¯', '¯¯˘¯', '¯¯¯˘'],
			feetFa: ['مستفعلن', 'مستفعلن', 'مفعولات'],
			nameLat: 'sarī‘ sālim',
			nameFa: 'سریع سالم',
			baseMeter: 'sarī‘'
		},
		{
			feet: ['¯¯', '˘¯¯', '¯¯', '˘¯¯'],
			feetFa: ['فعْلن', 'فعولن', 'فعْلن', 'فعولن'],
			nameLat: 'mutaqārib aṣlam sālim',
			nameFa: 'متقارب اصلم سالم',
			baseMeter: 'mutaqārib'
		},
		{
			feet: ['¯¯˘¯', '¯¯¯˘', '¯¯˘¯', '¯¯¯˘'],
			feetFa: ['مستفعلن', 'مفعولات', 'مستفعلن', 'مفعولات'],
			nameLat: 'munsariḥ sālim',
			nameFa: 'منسرح سالم',
			baseMeter: 'munsariḥ'
		}
	];
</script>
