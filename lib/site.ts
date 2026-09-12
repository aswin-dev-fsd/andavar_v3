export type Locale = 'en' | 'ta';
export type Band = 'ground' | 'warm' | 'cool' | 'ink';
export const clinic = { name:'Shri Andavar Eye Care and Retina Centre', phone:'04259 221 000', mobile:'94420 56767', address:'No. 73, Palladam Road, Opposite LMHSS School, T. Kottampatti, Pollachi 642002', hours:'Mon–Sat · 10:00 AM – 2:00 PM and 5:00 – 7:00 PM. Sunday closed.', maps:'https://www.google.com/maps/search/?api=1&query=Shri%20Andavar%20Eye%20Care%20and%20Retina%20Centre%20Pollachi' };
export const navItems = [
  { label:'Treatments', href:'/treatments' }, { label:'Schemes', href:'/schemes' }, { label:'About', href:'/about' }
];
export const treatments = [
  { symptom:'Things look cloudy, faded, or washed out', title:'Cataract surgery', body:'The lens inside your eye has clouded. It is replaced with a clear artificial one in a day-care procedure — in by morning, home by evening.', href:'/cataract-surgery' },
  { symptom:'A shadow, floaters, or sudden blurring', title:'Retina care', body:'Retinal detachment, macular disease and laser treatment. The retina is Dr. Raghuram’s specialist interest and the reason for the hospital’s name.', href:'/treatments' },
  { symptom:'You have diabetes, and your eyes have not been checked this year', title:'Diabetic eye care', body:'Diabetes damages the back of the eye long before you notice anything. A yearly screening takes twenty minutes and is the single most useful thing you can do.', href:'/treatments' },
  { symptom:'Glaucoma in the family, or pressure already found', title:'Glaucoma', body:'Pressure testing, visual field analysis and long-term monitoring. Glaucoma takes sight quietly, which is why regular checks matter more than symptoms.', href:'/treatments' },
  { symptom:'It has simply been a while', title:'Full eye examination', body:'Vision, pressure, retina and a prescription — all in one sitting, usually under an hour.', href:'/treatments' },
  { symptom:'You need glasses, or your old ones no longer work', title:'Spectacles & lenses', body:'Testing and dispensing on site, with honest advice about what you need and what you do not.', href:'/treatments' },
];
export const qualificationRows = [
  ['MBBS, DO','Medical degree, then a diploma in ophthalmology — eyes only.'],
  ['DNB (Ophthalmology)','The national board qualification for eye specialists in India.'],
  ['FICO (United Kingdom)','Fellowship of the International Council of Ophthalmology.'],
  ['FRCS (Glasgow)','A surgical fellowship of the Royal College of Surgeons — unusual in a town this size.'],
] as const;

export const cataractSteps = [
  ['You arrive in the morning','Fasting is usually not required — you will be told beforehand if anything is different in your case. Bring someone with you; you will not be able to drive home.'],
  ['Drops and preparation','Drops widen the pupil and numb the eye. There is no injection and no general anaesthetic for a routine cataract.'],
  ['The operation — about fifteen minutes','A very small opening is made, the cloudy lens is broken up and removed, and a clear artificial lens is placed where it was. You are awake, you feel no pain, and there is usually no stitch.'],
  ['Rest, then home','You rest for a short while and go home the same day with a shield over the eye and a schedule of drops.'],
  ['The day after','You come back the next morning so Dr. Raghuram can check the eye. Most people notice the difference by then.'],
  ['The weeks after','Drops continue for a few weeks. Avoid dust, swimming and rubbing the eye. A final prescription for glasses is given once the eye has settled, usually around four weeks.'],
] as const;
export const schemes = [
  { name:"Chief Minister's Comprehensive Health Insurance Scheme", tag:'CMCHIS · அரசு காப்பீட்டுத் திட்டம்', body:'The Tamil Nadu government scheme. Cataract surgery and a number of other eye procedures are covered.', bring:['Your CMCHIS card','Aadhaar card','Ration card, if you have it'] },
  { name:'Pensioners Health Scheme', tag:'For retired government employees · ஓய்வூதியர் சுகாதாரத் திட்டம்', body:"Covers retired state government employees and their dependants under the scheme's terms.", bring:['Your pensioner ID','Scheme card','A recent pension slip'] },
  { name:'Star Health Insurance', tag:'Private cover · தனியார் காப்பீடு', body:'Cashless treatment subject to your policy terms and prior approval where required.', bring:['Policy card or number','A photo ID','Any referral letter'] },
];
export const counterQuestions = ['Do I need a referral to use my scheme?','Will I have to pay and claim it back?','Does the scheme cover both eyes?','What about spectacles afterwards?','I am not from Pollachi. Can I still use my scheme?'];
export const testimonials = [
  ['Cataract surgery, both eyes','R. Manickam','Pollachi','I had stopped driving…'],['Diabetic eye screening','S. Lakshmi','Zamin Uthukuli','My sugar has been high…'],['Retina, emergency','A. Karthik','Kinathukadavu','I saw a curtain coming…'],['Cataract surgery','M. Devi','Pollachi',''],['Glaucoma monitoring','V. Subramanian','Anaimalai',''],['Spectacles and check-up','P. Anitha','Pollachi','']
] as const;
export const healthTopics = [
 ['If you have diabetes, your eyes need a check every year','Diabetic damage to the back of the eye can begin before you notice changes. The full answer should be completed and reviewed by Dr. Raghuram before publication.'],
 ['A cataract does not need to be "ripe"','This is old advice from an era of different surgery. Final clinical wording requires review before launch.'],
 ['Children rarely say they cannot see','Children may adapt to one eye or fail to recognise that their vision is unusual. Final clinical wording requires review.'],
 ['Floaters are usually harmless. A curtain is not.','New flashes, a sudden shower of floaters or a curtain-like shadow need prompt clinical assessment. Final clinical wording requires review.'],
 ['Screens do not damage your eyes, but they do dry them','Screen use can reduce blinking and cause dryness or strain. Final clinical wording requires review.'],
 ['Do not buy a pressure reading from a machine alone','Eye pressure is only one part of glaucoma assessment. Final clinical wording requires review.'],
] as const;
export const copyTa = {
 homeTitle:'பொள்ளாச்சியில் கண்புரை மற்றும் விழித்திரை சிகிச்சை.',
 treatments:'நீங்கள் கவனித்ததை வைத்து தொடங்குங்கள்.', cost:'செலவு பற்றி கேளுங்கள்.', visit:'LMHSS பள்ளிக்கு எதிரில், பல்லடம் சாலையில்.', surgeon:'Dr. A. Raghuram'
};
