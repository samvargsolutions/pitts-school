import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── 51 CULTURAL & CO-CURRICULAR ACTIVITIES DATA ───────────────── */
const culturalActivities = [
  {
    id: 1,
    title: 'Tiny Stars Shine Bright at PITTS Modern Schools Fancy Dress Fiesta',
    meta: 'CCA Session 2026–27 / LKG & UKG / 09 July 2026',
    image: '/image/02.jpg',
    text: 'PITTS Modern School, Gomia organized a vibrant Fancy Dress Competition on 09 July 2026 under the aegis of the CCA Department as part of the CCA Session 2026–27 for the students of LKG and UKG. The event aimed to foster creativity, self-confidence, stage presence, and communication skills while providing the little learners with an opportunity to express themselves through imaginative costumes and lively performances.'
  },
  {
    id: 2,
    title: 'PITTS Modern School, Gomia Organizes "Mind Marathon" Quiz Competition to Foster Knowledge and Teamwork',
    meta: 'Quiz Competition / 09 July 2026',
    image: '/image/sp1.jpg',
    text: 'PITTS Modern School, Gomia organized the Mind Marathon Quiz Competition on 09 July 2026 as part of the CCA Session 2026–27. The competition was conducted to enhance students general knowledge, logical thinking, presence of mind, and teamwork in a healthy competitive environment.'
  },
  {
    id: 3,
    title: 'Mothers and Children Unite for a Greener Tomorrow at PITTS Modern School, Gomia',
    meta: 'Ek Ped Maa Ke Naam / 10 July 2026',
    image: '/image/IMG_2285.jpg',
    text: 'PITTS Modern School, Gomia organised the Ek Ped Maa Ke Naam Parent–Child Sapling Plantation Programme on 10.07.2026 for the students of Bal Vatika and LKG under the Government of India nationwide Ek Ped Maa Ke Naam campaign. The programme commenced with a warm welcome for the parents of Bal Vatika and LKG students.'
  },
  {
    id: 4,
    title: 'A Week of Literature, Learning and Creativity at PITTS Modern School, Gomia',
    meta: 'Literary Week / 01–07 July 2026',
    image: '/image/hrd2.jpg',
    text: 'PITTS Modern School, Gomia successfully organised Literary Week from 1st July to 7th July 2026 with the objective of fostering a love for Hindi, English, and Sanskrit, while enhancing students creativity, communication skills, language proficiency, and appreciation for literature. Students from I to Class VIII enthusiastically participated in a wide range of literary activities throughout the week.'
  },
  {
    id: 5,
    title: 'PITTS MODERN SCHOOL, GOMIA ORGANIZES CBSE GREEN SUMMER CAMP ACTIVITIES UNDER ECO CLUB FOR MISSION LiFE',
    meta: 'Eco Club / Mission LiFE / 01 July 2026',
    image: '/image/cca17.jpg',
    text: 'PITTS Modern School, Gomia organized Green Summer Camp Activities under the CBSE Eco Clubs for Mission LiFE initiative for students of Classes VI to VIII. The programme was conducted to promote environmental awareness and encourage students to adopt sustainable and eco-friendly practices in their daily lives.'
  },
  {
    id: 6,
    title: 'PITTS MODERN SCHOOL, GOMIA ORGANIZES AWARENESS PROGRAMME ON SPECIAL INTENSIVE REVISION (SIR 2026)',
    meta: 'Awareness Programme / 30 June 2026',
    image: '/image/aam1.jpg',
    text: 'PITTS Modern School, Gomia, successfully organized an awareness programme on the Special Intensive Revision (SIR 2026) of the electoral roll during the school assembly on 30th June 2026. The programme aimed to create awareness among the students about the importance of a fair, accurate, and inclusive electoral process while encouraging them to spread awareness among their families and the community.'
  },
  {
    id: 7,
    title: 'PITTS MODERN SCHOOL, GOMIA CELEBRATES RESERVED BAGLESS DAY WITH JOYFUL LEARNING ACTIVITIES',
    meta: 'Pre-Primary Wing / 23 June 2026',
    image: '/image/24.jpg',
    text: 'PITTS Modern School, Gomia organized a Reserved Bagless Day for the students of LKG and UKG A, B, C & D on 23rd June 2026. The initiative aimed to promote joyful, activity-based learning by allowing children to explore concepts through fun, creativity, and hands-on experiences instead of regular classroom lessons.'
  },
  {
    id: 8,
    title: 'Turning Waste into Wonder – PITTS Modern School, Gomia Organizes Best Out of Waste Competition',
    meta: 'Best Out of Waste / 23 June 2026',
    image: '/image/cca18.jpg',
    text: 'PITTS Modern School, Gomia successfully organized a Best Out of Waste Competition for students of Classes VI to VIII in the Bio-Lab. The competition aimed to encourage creativity, innovation, and environmental awareness among students by motivating them to create useful and decorative items from waste materials.'
  },
  {
    id: 9,
    title: '“When Culture Dances, Heritage Comes Alive” – PITTS Modern School, Gomia Celebrates the Spirit of Jharkhand through Solo Dance Competition',
    meta: 'Beats of Jharkhand / 23 June 2026',
    image: '/image/IMG_2190.jpg',
    text: 'The Assembly Ground of PITTS Modern School, Gomia came alive with rhythm, colour, and cultural vibrancy as the school successfully organized a Solo Dance Competition for students of Classes III to V on the theme “Beats of Jharkhand.”'
  },
  {
    id: 10,
    title: 'Rhythms of Talent and Grace: PITTS Modern School, Gomia Organizes Enthralling Solo Dance Competition',
    meta: 'Solo Dance / 23 June 2026',
    image: '/image/IMG_2203.jpg',
    text: 'PITTS Modern School, Gomia successfully organized a vibrant Solo Dance Competition for the students of Classes I and II at the Junior Assembly Ground on 23rd June 2026. The event provided a wonderful platform for the students to showcase their dancing skills, confidence, and creativity.'
  },
  {
    id: 11,
    title: 'Creativity, Wellness & Celebration Mark the Grand Finale: Final Day of Summer Camp 2026–27 at PITTS Modern School, Gomia',
    meta: 'Summer Camp Finale / 21 June 2026',
    image: '/image/basketball2.jpg',
    text: 'The Summer Camp 2026–27 at PITTS Modern School, Gomia concluded on a high note on 21 June 2026, with students enthusiastically participating in a range of engaging activities that celebrated fitness, creativity, wellness, and fun. As the final day of the Summer Camp, the event provided students with memorable experiences and an opportunity to showcase the skills and confidence they had developed throughout the camp.'
  },
  {
    id: 12,
    title: 'Energy, Fitness & Fun Continue: Day 2 of Summer Camp 2026–27 at PITTS Modern School, Gomia',
    meta: 'Summer Camp Day 2 / 20 June 2026',
    image: '/image/aam32.jpg',
    text: 'Continuing the spirit of enthusiasm, learning, and holistic development, Day 2 of the Summer Camp 2026–27 at PITTS Modern School, Gomia was conducted with great energy and excitement on 20 June 2026. Students participated wholeheartedly in a variety of engaging activities that promoted physical fitness, discipline, teamwork, and recreation.'
  },
  {
    id: 13,
    title: 'Energy, Creativity & Learning in Full Swing: Day 1 of Summer Camp 2026–27 at PITTS Modern School, Gomia',
    meta: 'Summer Camp Day 1 / 19 June 2026',
    image: '/image/sp8.jpg',
    text: 'The first day of the camp, held on 19 June 2026, witnessed enthusiastic participation from students of Classes II to VI. The campus came alive with energy, excitement, and creativity as children engaged in a wide range of enriching activities designed to nurture their physical, mental, artistic, and emotional growth.'
  },
  {
    id: 14,
    title: 'Echoes of Gurudev: Pitts Modern School, Gomia Celebrates Rabindranath Tagore Jayanti with Cultural Grandeur',
    meta: 'Rabindranath Tagore Jayanti / 09 May 2026',
    image: '/image/13.jpg',
    text: 'Pitts Modern School celebrated the birth anniversary of Rabindranath Tagore with great enthusiasm and reverence on 09.05.2026 in the MP Hall. The programme was organized to honour the legendary poet, philosopher, and Nobel Laureate whose literary and cultural contributions continue to inspire generations.'
  },
  {
    id: 15,
    title: 'Pitts Modern School, Gomia celebrates “A Celebration of Eternal Love and Gratitude: Grand Mother’s Day Celebration by Class VII',
    meta: 'Mother’s Day / 08 May 2026',
    image: '/image/hrd6.jpg',
    text: 'Pitts Modern School grandly celebrated Mother’s Day with the students of Class VII through the special programme “Maatri Charan Paduka Pujan,” a heartwarming and spiritually uplifting celebration dedicated to honouring the unconditional love, sacrifice, and blessings of mothers. The programme beautifully blended culture, devotion, gratitude, and emotion, creating unforgettable memories for the mothers present.'
  },
  {
    id: 16,
    title: 'Tribute to Rabindranath Tagore Jayanti in Cultural Grandeur',
    meta: 'Cultural Tribute / 09 May 2026',
    image: '/image/hrd14.jpg',
    text: 'Pitts Modern School celebrated the birth anniversary of Rabindranath Tagore with cultural grandeur, poetry recitations, and musical tributes in the MP Hall to honour his legendary contributions to literature and music.'
  },
  {
    id: 17,
    title: '“Dance is the timeless expression of grace, where discipline meets beauty in motion.”',
    meta: 'Inter-Section Group Dance / 27 April 2026',
    image: '/image/hrd22.jpg',
    text: 'Pitts Modern School, Gomia, organized an Inter-Section Group Dance Competition on 27th April 2026 in the MP Hall for the students of Classes I & II. Held under the aegis of the CCA Department, the event stood as a refined celebration of rhythm and artistry, where the little dancers captivated the audience with their poise, synchronization, and expressive brilliance.'
  },
  {
    id: 18,
    title: '“Dance is the joyful blending of cultures, where every step tells a story.”',
    meta: 'Fusion Dance / Classes III to V / 27 April 2026',
    image: '/image/hrd27.jpg',
    text: 'Pitts Modern School, Gomia, organized an Inter-Section Group Dance Competition for the students of Classes III to V on the theme “Fusion – Western and Classical” on 27.04.26. The event was conducted with great enthusiasm, providing a vibrant platform for students to showcase their creativity and talent.'
  },
  {
    id: 19,
    title: 'Marks the Start of CCA 2026–27 with a Splash of Colours 🎨',
    meta: 'CCA Commencement / Hand Print Activity',
    image: '/image/cca12.jpg',
    text: 'Pitts Modern School, Gomia, marked a joyful and enthusiastic start to its Co-Curricular Activities (CCA) for the session 2026–27 with the LKG and UKG students. The activity conducted was a Hand Print Activity, which brought immense excitement and creativity among the tiny tots.'
  },
  {
    id: 20,
    title: 'From Tradition to Tribute: A Vibrant Celebration of Ambedkar Jayanti, Bihu & Baisakhi',
    meta: 'Special Assembly / 13 April 2026',
    image: '/image/04.jpg',
    text: 'Pitts Modern School, Gomia, organized a vibrant and meaningful special assembly on 13th April 2026 to commemorate Ambedkar Jayanti, along with the joyous festivals of Bihu and Baisakhi. The morning assembly beautifully reflected the spirit of unity in diversity, bringing together cultural richness and national pride.'
  },
  {
    id: 21,
    title: 'Pitts Modern School, Gomia Celebrates ‘Green Day’ with Joy and Awareness in Kindergarten',
    meta: 'Green Day / 30 August 2025',
    image: '/image/cca14.jpg',
    text: 'Pitts Modern School, Gomia joyfully celebrated Green Day in the classrooms of LKG and UKG on 30.08.25 under the guidance of their class teachers. The celebration aimed to introduce little learners to the importance of greenery, nature, and healthy living in a fun and interactive way.'
  },
  {
    id: 22,
    title: 'Grand Celebration of the 79th Independence Day at Pitts Modern School, Gomia, Marked by Splendour and Patriotic Fervour',
    meta: '79th Independence Day / 15 August 2025',
    image: '/image/hrd29.jpg',
    text: 'The 79th Independence Day was celebrated with grandeur and fervent patriotism at Pitts Modern School, Gomia, on August 15, 2025. The school premises resonated with the spirit of freedom as students, teachers, parents, and esteemed guests gathered to commemorate this historic occasion.'
  },
  {
    id: 23,
    title: 'Pitts Modern School, Gomia, Celebrates Janmashtami with Devotion and Splendour',
    meta: 'Janmashtami Celebration / 14 August 2025',
    image: '/image/jal1.jpg',
    text: 'Pitts Modern School, Gomia, celebrated Janmashtami with great zeal and joy in a special assembly held on 14.08.2025. The programme was organised by Class IX Vijay. The morning assembly commenced with the soulful chanting of the Gayatri Mantra, followed by a melodious devotional song Achutam Keshavam presented by the school choir.'
  },
  {
    id: 24,
    title: 'Pitts Modern School, Gomia, Brings Stories and Nature Alive Through Skit Competition',
    meta: 'Skit Competition / Classes III to V',
    image: '/image/jal2.jpg',
    text: 'Pitts Modern School, Gomia, organised an engaging Skit Competition for students of Classes III to V, offering a vibrant platform for little learners to showcase their acting skills, creativity, and confidence on stage.'
  },
  {
    id: 25,
    title: 'Honouring Heritage and Freedom: Celebrating Sanskrit Divas, Raksha Bandhan & the Quit India Movement at Pitts Modern School, Gomia',
    meta: 'Special Assembly / 08 September 2025',
    image: '/image/jal3.jpg',
    text: 'Pitts Modern School, Gomia, held a vibrant and meaningful special assembly on 8th September 2025 to celebrate Sanskrit Divas and Raksha Bandhan, and to commemorate the Quit India Movement. The programme beautifully intertwined the values of linguistic heritage, cultural bonding, and national pride, leaving a lasting impression on all present.'
  },
  {
    id: 26,
    title: 'A Heartwarming Day for LKG & UKG Students at Pitts Modern School, Gomia on 04.08.2025',
    meta: 'Friendship Day / 09 August 2025',
    image: '/image/jal6.jpg',
    text: 'Pitts Modern School, Gomia, celebrated Friendship Day with the adorable students of LKG and UKG on Friday, August 9, 2025, during the CCA period. The event was held in the respective classrooms under the warm guidance and supervision of the class teachers.'
  },
  {
    id: 27,
    title: 'Shaping Screen-Smart Students: Phone Awareness Drive at Pitts Modern School, Gomia',
    meta: 'Moral Initiative / August 2025',
    image: '/image/pat3.jpg',
    text: 'In its continued commitment to holistic development, Pitts Modern School, Gomia, organized a special Phone Awareness Activity for students of LKG to Class I, aimed at promoting responsible mobile phone usage among young children under the theme “Reducing Mobile Phone Usage: A Moral Initiative.”'
  },
  {
    id: 28,
    title: 'Dance for a Cause: Inter-House Group Dance Competition Inspires and Enlightens at Pitts Modern School ,Gomia',
    meta: 'Inter-House Group Dance / 12 July 2025',
    image: '/image/pat5.jpg',
    text: 'An inspiring Inter-House Group Dance Competition was held on Saturday, July 12, 2025, at the Senior Assembly Ground of Pitts Modern School, Gomia, for the students of Classes VI to VIII as part of the school’s ongoing Co-Curricular Activities (CCA) programme.'
  },
  {
    id: 29,
    title: 'A Splash of Colours: Colouring Competition for LKG & UKG Students at Pitts Modern School, Gomia',
    meta: 'Colouring Competition / 12 July 2025',
    image: '/image/pat6.jpg',
    text: 'Pitts Modern School, Gomia, conducted a vibrant Colouring Competition for the students of LKG and UKG on Saturday, July 12, 2025, during the CCA period. The activity was held in the respective classrooms under the careful supervision and guidance of the class teachers.'
  },
  {
    id: 30,
    title: 'PITTS MODERN SCHOOL, GOMIA Celebrates Van Mahotsav on 04.07.2025: Eco Club Leads the Green Initiative',
    meta: 'Van Mahotsav / Eco Club / 04 July 2025',
    image: '/image/pat7.jpg',
    text: 'Pitts Modern School, Gomia, joyfully celebrated Van Mahotsav on 4th July 2025 during the Zero Period under the vibrant leadership of the Eco Club. The celebration commenced with a special combined assembly, where the significance of Van Mahotsav and afforestation were highlighted.'
  },
  {
    id: 31,
    title: 'A Joyous Start to the Summer Camp 2025 at Pitts Modern School,Gomia',
    meta: 'Summer Camp / 13 June 2025',
    image: '/image/pat19.jpg',
    text: 'Pitts Modern School, Gomia, successfully commenced its much-awaited Summer Camp for students of Classes III to VI on 13th June 2025. The first day was filled with energy, creativity, and a joyful learning atmosphere.'
  },
  {
    id: 32,
    title: 'Pitts Modern School Organizes Mothers Day Card-Making Activity for Students of Classes LKG to IV',
    meta: 'Mother’s Day Card-Making / 08 May 2025',
    image: '/image/Pu13.jpg',
    text: 'Pitts Modern School, Gomia, organized a Mothers Day Card-Making Activity for the students of Classes LKG to IV on May 8, 2025, to mark the celebration of Mother’s Day. Young learners expressed their love and gratitude for their mothers through handmade cards.'
  },
  {
    id: 33,
    title: 'Pitts Modern School, Gomia, Celebrates International Yoga Day with Great Enthusiasm',
    meta: 'International Yoga Day / 21 June 2025',
    image: '/image/hrd51.jpg',
    text: 'Pitts Modern School, Gomia, buzzed with energy as it celebrated International Yoga Day with great enthusiasm in the school MP Hall. The yoga session was led by Mrs. Puja Mehta, promoting physical well-being and mental harmony among students and staff.'
  },
  {
    id: 34,
    title: 'Pitts Modern School, Gomia Celebrates International Yoga Day with a Blend of Creativity and Expression',
    meta: 'Creative Expression & Yoga / June 2025',
    image: '/image/hrd57.jpg',
    text: 'In a unique celebration of International Yoga Day, Pitts Modern School, Gomia, organized a series of engaging activities under Literary Week to foster awareness about yoga, the environment, and holistic well-being through artistic expression.'
  },
  {
    id: 35,
    title: 'PITTS MODERN SCHOOL, GOMIA Celebrates Jagannath Rath Yatra with Devotion and Splendour',
    meta: 'Jagannath Rath Yatra / 27 June 2025',
    image: '/image/hrd62.jpg',
    text: 'Upholding the rich cultural heritage and spiritual traditions of India, Pitts Modern School, Gomia celebrated the auspicious occasion of Jagannath Rath Yatra on 27.06.2025 with great enthusiasm and devotion.'
  },
  {
    id: 36,
    title: 'Pitts Modern School, Gomia Showcases Cultural Splendour in Inter-Class Group Dance Competition',
    meta: 'Inter-Class Group Dance / 30 August 2025',
    image: '/image/hrd65.jpg',
    text: 'Pitts Modern School, Gomia organized a vibrant Group Dance Competition on 30.08.2025 for the students of Classes I to V, celebrating the rich heritage of Indian festivals through rhythm and movement.'
  },
  {
    id: 37,
    title: 'Leadership with Responsibility: Pitts Modern School, Gomia Welcomes Its New Students’ Council 2025–26',
    meta: 'Investiture Ceremony / 08 September 2025',
    image: '/image/inv1.jpg',
    text: 'Pitts Modern School, Gomia, celebrated its Investiture Ceremony for the academic session 2025–26 on the occasion of International Literacy Day with great pride and solemnity, formally inducting the newly elected Students’ Council.'
  },
  {
    id: 38,
    title: 'Young Performers Dazzle at Solo Dance Competition for Classes III to V at Pitts Modern School, Gomia',
    meta: 'Solo Dance Competition / 28 June 2025',
    image: '/image/inv2.jpg',
    text: 'On June 28, 2025, the Senior Assembly Ground at Pitts Modern School, Gomia came alive with rhythm, expression, and vibrant energy as students of Classes III to V participated in a Solo Dance Competition.'
  },
  {
    id: 39,
    title: 'Pre-Primary Wing (LKG & UKG): Little Learners Dazzle in Fancy Dress Competition',
    meta: 'Pre-Primary Fancy Dress / 05 July 2025',
    image: '/image/inv3.jpg',
    text: 'As part of Activity Week 7, the Pre-Primary Wing of Pitts Modern School, Gomia, organized a delightful Fancy Dress Competition on Saturday, July 5, 2025, celebrating creativity and imagination among its tiny tots.'
  },
  {
    id: 40,
    title: 'Pitts Modern School, Gomia fosters Curiosity and Confidence Through Primary Wing Quiz Competition',
    meta: 'Primary Wing Quiz / 05 July 2025',
    image: '/image/hrd67.jpg',
    text: 'The Primary Wing of Pitts Modern School, Gomia, was abuzz with excitement and intellectual energy as students from Classes I to V participated in a spirited Quiz Competition during Activity Week 7.'
  },
  {
    id: 41,
    title: 'Pitts Modern School, Gomia Blossoms with Creativity in Middle Wing Bouquet Making Competition',
    meta: 'Bouquet Making Competition / 05 July 2025',
    image: '/image/hrd71.jpg',
    text: 'Students of Classes VI to VIII demonstrated their artistic flair and environmental consciousness in a spirited Bouquet Making Competition in the Biology Lab, using natural and handmade materials.'
  },
  {
    id: 42,
    title: 'Voices in Harmony: Inter-House Group Song Competition Strikes a Musical Chord at Pitts Modern School, Gomia',
    meta: 'Inter-House Group Song / 12 July 2025',
    image: '/image/hrd73.jpg',
    text: 'Pitts Modern School, Gomia, echoed with melody and excitement as it organized a vibrant Inter-House Group Song Competition for Classes VI to VIII on Saturday, July 12, 2025, at the Senior Assembly Ground.'
  },
  {
    id: 43,
    title: 'Dance for a Cause: Inter-House Group Dance Competition Inspires and Enlightens at Pitts Modern School, Gomia',
    meta: 'Inter-House Group Dance / 12 July 2025',
    image: '/image/hrd74.jpg',
    text: 'An inspiring Inter-House Group Dance Competition was held on Saturday, July 12, 2025, at the Senior Assembly Ground for the students of Classes VI to VIII as part of the ongoing CCA programme.'
  },
  {
    id: 44,
    title: 'A Vibrant Beginning: Pitts Modern School, Gomia, Commences Its CCA Activities for the 2025–26 Session with Enthusiasm',
    meta: 'CCA Commencement / 15 April 2025',
    image: '/image/hrd90.jpg',
    text: 'Pitts Modern School, Gomia, conducted a series of planned Co-Curricular Activities (CCA) on 15th April 2025, marking the beginning of engaging and skill-building sessions for the academic session 2025–26.'
  },
  {
    id: 45,
    title: 'PMS Innovators Expo 2025: A Grand Celebration of Creativity and Innovation',
    meta: 'Innovators Expo 2025 / 26 February 2025',
    image: '/image/Pu11.jpg',
    text: 'Pitts Modern School, Gomia, organized its much-anticipated school exhibition, PMS Innovators Expo 2025, on February 26, 2025, providing students from LKG to IX and XI a grand platform to showcase creative models and scientific inquiry.'
  },
  {
    id: 46,
    title: 'A Magical Day of Fun and Learning at Pitts Modern School, Gomia',
    meta: 'Day Camp / 01 February 2025',
    image: '/image/hrd99.jpg',
    text: 'Pitts Modern School Gomia organized a delightful Day Camp for the students of Classes I and II on February 1, 2025, under the theme “Welcome to the World of Joy, Fun & Magic.”'
  },
  {
    id: 47,
    title: 'Empowering Students for Success: Pariksha Pe Charcha at Pitts Modern School, Gomia',
    meta: 'Pariksha Pe Charcha / 10 February 2025',
    image: '/image/hrd108.jpg',
    text: 'Pitts Modern School, Gomia, organized Pariksha Pe Charcha for senior secondary students on 10.02.2025 in the MP Hall to help reduce exam stress and build confidence for upcoming board examinations.'
  },
  {
    id: 48,
    title: 'PITTS Modern School, Gomia, Celebrates Grandparents Day with Warmth and Joy',
    meta: 'Grandparents Day / 12 February 2025',
    image: '/image/hrd110.jpg',
    text: 'PITTS Modern School, Gomia, organized a heartfelt celebration of Grandparents Day on February 12, 2025, recognizing the invaluable role grandparents play with performances by LKG tiny tots.'
  },
  {
    id: 49,
    title: 'The 76th Republic Day Celebration Marked by Splendour and Patriotism at Pitts Modern School, Gomia',
    meta: '76th Republic Day / 26 January 2025',
    image: '/image/IMG_2081.jpg',
    text: 'The 76th Republic Day was celebrated with great enthusiasm at Pitts Modern School, Gomia, on January 26, 2025, featuring the unfurling of the National Flag by Chief Guest Mr. Adarsh Madhup, patriotic performances, and prize distribution.'
  },
  {
    id: 50,
    title: 'Pitts Modern School, Gomia, organized the Tilak and Ashirvachan Ceremony on 30th January 2025',
    meta: 'Tilak & Ashirvachan Ceremony / 30 January 2025',
    image: '/image/IMG_2128.jpg',
    text: 'Pitts Modern School, Gomia, organized the Tilak and Ashirvachan Ceremony on 30th January 2025 to bless and encourage Class X students as they prepare for their board examinations.'
  },
  {
    id: 51,
    title: 'Pitts Modern School, Gomia Celebrates Christmas with Joy, Music, and Festive Surprises',
    meta: 'Christmas Celebration / 24 December 2024',
    image: '/image/IMG_2137.jpg',
    text: 'Pitts Modern School, Gomia, organized a grand Christmas celebration during the morning assembly on December 24, 2024, featuring festive carols, joyful performances, and messages of peace and goodwill.'
  }
];

/* ─── 37 SPORTS ACTIVITIES DATA ─────────────────────────────────── */
const sportsActivities = [
  {
    id: 1,
    title: 'Champions in Action: Inter-House Boys & Girls Badminton Knockout Matches at PITTS Modern School, Gomia',
    meta: 'Badminton Knockout / 07 July 2026',
    image: '/image/aam1.jpg',
    text: 'PITTS Modern School, Gomia organized the Inter-House Boys & Girls Badminton Knockout Matches for students of Classes VI to VIII, IX, and XI from 07 July 2026 (Tuesday) as part of the schools Co-Curricular Activities (CCA) for the academic session 2026–27.'
  },
  {
    id: 2,
    title: 'Pitts Modern School, Gomia Shines on the Final Day of the 47th Annual Athletic Meet',
    meta: '47th Annual Athletic Meet / Final Day',
    image: '/image/aam32.jpg',
    text: 'Pitts Modern School, Gomia witnessed an energetic and inspiring culmination on the final day of its 47th Annual Athletic Meet, marked by discipline, enthusiasm, and true sporting spirit. The day commenced with Chief Guest Mr. Arindam Dasgupta (Vice-Chairman of Gomia School Society), Mr. Abhishek Biswas (MCM of IEPL ORICA), and Mr. Prabhas Jha.'
  },
  {
    id: 3,
    title: 'The Inter-School Kho-Kho Open School Competition 2026',
    meta: 'Inter-School Kho-Kho / Sahodaya Complex 2026',
    image: '/image/sp1.jpg',
    text: 'The Inter-School Kho-Kho Open School Competition 2026, conducted under the aegis of the Dr. S. Radhakrishnan Sahodaya School Complex, Bokaro, was successfully held at Pitts Modern School, Gomia. A total of 11 schools participated with 11 boys’ teams and 10 girls’ teams with more than 260 students competing.'
  },
  {
    id: 4,
    title: 'PITTS Modern School, Gomia Organizes Thrilling Kho Kho Match, Fostering Team Spirit and Fitness on 10th January 2025',
    meta: 'Kho-Kho Match / 10 January 2025',
    image: '/image/sp8.jpg',
    text: 'PITTS Modern School, Gomia, organized an exciting Kho Kho match for the girls of classes IX and XI on 10th January 2025, promoting physical fitness and team spirit among the students.'
  },
  {
    id: 5,
    title: '🏆 PITTS MODERN SCHOOL, GOMIA ACHIEVES GLORIOUS SUCCESS AT NATIONAL KARATE CHAMPIONSHIP 🏆',
    meta: '25th National Karate Championship / National Recognition',
    image: '/image/hrd20.jpg',
    text: '“Success is not just about winning medals, but about the discipline, dedication, and determination behind every move.” Pitts Modern School, Gomia etched another glorious chapter as its young karatekas delivered an outstanding performance at the 25th Year National Japan Kenyu Ryu Open Karate Championship.'
  },
  {
    id: 6,
    title: 'Pitts Modern School, Gomia Shines on the National Sports Arena',
    meta: '11th Senior National Lagori / National Level',
    image: '/image/basketball2.jpg',
    text: 'Pitts Modern School, Gomia continues its legacy of excellence as Dhara Singh and Smita Kumari of Class IX earned the honour of representing the school at the 11th Senior National Lagori Sport Championship, organised by the Amateur Lagori Federation of India (ALFI).'
  },
  {
    id: 7,
    title: 'Little Champions in Action - Annual Sports Day 2025',
    meta: 'Pre-Primary Sports Day 2025',
    image: '/image/IMG_3328.jpg',
    text: 'Pitts Modern School, Gomia, organised its Annual Sports Day for the Pre-Primary Wing (LKG to Class II), celebrating the spirit of sportsmanship, enthusiasm, and joyful participation among the tiny tots with age-appropriate engaging races.'
  },
  {
    id: 8,
    title: 'PMS Gomia Triumphs at Sansad Khel Mahotsav 2025',
    meta: 'Sansad Khel Mahotsav / Khelo India & Fit India',
    image: '/image/aam84.jpg',
    text: 'Pitts Modern School, Gomia achieved remarkable success at the Sansad Khel Mahotsav 2025, an athletics competition organised under the initiatives of Khelo India and Fit India, with the theme “Fit Youth for a Developed India” at Swami Vivekanand Playground.'
  },
  {
    id: 9,
    title: 'Pitts Modern School Applauds Kabaddi Champions at Morning Assembly',
    meta: 'Interhouse Senior Boys Kabaddi / 03 December 2025',
    image: '/image/aam32.jpg',
    text: 'Pitts Modern School, Gomia celebrated the spirit of determination and teamwork during the morning assembly on 03 December 2025, as the winners of the Interhouse Senior Boys Kabaddi Tournament were honoured with medals and certificates.'
  },
  {
    id: 10,
    title: 'Pitts Modern School, Gomia Applauds Sporting Excellence in Interhouse Competitions',
    meta: 'Basketball & Kabaddi / Interhouse Tournaments',
    image: '/image/sp1.jpg',
    text: 'Pitts Modern School, Gomia, celebrated the spirit of sportsmanship and excellence during the morning assembly as the winners of the Interhouse Senior Boys Basketball Tournament and Interhouse Junior Boys Kabaddi Tournament were felicitated.'
  },
  {
    id: 11,
    title: 'Celebrating Champions: Pitts Modern School Honours Inter-House Sports Winners on 01.12.25',
    meta: 'Cricket & Volleyball Felicitations / 01 December 2025',
    image: '/image/IMG_3479.jpg',
    text: 'Pitts Modern School, Gomia felicitated the winners of the Inter-House Junior Boys Cricket and Senior Boys Volleyball competitions held recently on the school campus, celebrating sportsmanship, teamwork, and dedication.'
  },
  {
    id: 12,
    title: 'Inter-House Kabaddi Tournament Inspires Team Spirit at Pitts Modern School, Gomia',
    meta: 'Inter-House Kabaddi / 18 November 2025',
    image: '/image/dc2.jpg',
    text: 'Pitts Modern School, Gomia successfully organised the Inter-House Kabaddi Tournament for boys and girls of Std. VI to VIII and Std. IX & XI on 18 November 2025 to promote physical fitness, team spirit, discipline, and sportsmanship.'
  },
  {
    id: 13,
    title: 'Pitts Modern School , Gomia Shines at Bokaro District Archery Championship 2025',
    meta: 'Bokaro District Archery Championship / 11 November 2025',
    image: '/image/hrd22.jpg',
    text: 'Students of Pitts Modern School, Gomia participated in the Bokaro District Archery Championship 2025 on 11 November 2025 at Vedanta ELS, Chandankiayari, Bokaro, competing across U-14 and U-17 categories with commendable skill.'
  },
  {
    id: 14,
    title: 'Inter-House Boys Basketball Tournament Showcases Passion and Team Spirit at Pitts Modern School, Gomia on 07.11.25',
    meta: 'Inter-House Basketball / 07 November 2025',
    image: '/image/IMG_2203.jpg',
    text: 'An Inter-House Boys Basketball Tournament was organized by Pitts Modern School, Gomia, for the students of Classes IX and XI on November 7, 2025 (Friday), showcasing energy, teamwork, and intense coordination.'
  },
  {
    id: 15,
    title: 'Inter-House Boys Cricket Tournament Ignites Team Spirit at Pitts Modern School , Gomia',
    meta: 'Inter-House Cricket / 03 November 2025',
    image: '/image/IMG_3479.jpg',
    text: 'An Inter-House Boys Cricket Tournament was organized by Pitts Modern School, Gomia, for the students of Classes VI to VIII on November 3, 2025 (Monday), offering a spectacular display of skill and House pride.'
  },
  {
    id: 16,
    title: 'Pitts Modern School Teacher Recognized at the 4th South Asian Senior Athletics Championships 2025',
    meta: 'SAAF Technical Official / 03 November 2025',
    image: '/image/hrd14.jpg',
    text: 'A felicitation ceremony was held during the morning assembly of Pitts Modern School, Gomia, on 3rd November 2025, to honour Mr. Gangadhar Yadav, Sports Teacher, for serving as Technical Official in the 4th South Asian Senior Athletics Championships 2025.'
  },
  {
    id: 17,
    title: 'Shining Star of Pitts Modern School, Gomia Makes Bokaro Proud at National Lagori Championship',
    meta: 'National Lagori Certificate of Excellence',
    image: '/image/hrd20.jpg',
    text: 'Dhara Singh, a student of Pitts Modern School, Gomia, was felicitated with a Certificate of Excellence by the Amateur Lagori Association of Jharkhand State for exemplary performance at the National Lagori Championship in Nashik, Maharashtra.'
  },
  {
    id: 18,
    title: 'Pitts Modern School, Gomia, Shines at the 9th Sub-Junior National Gatka Championship 2025',
    meta: '9th Sub-Junior National Gatka / Delhi',
    image: '/image/dc2.jpg',
    text: 'Students of Pitts Modern School, Gomia brought immense glory by winning a medal in the Under-11 Single Soti Team Event at the 9th Sub-Junior National Gatka Championship held at Sri Guru Tegh Bahadur Khalsa College, Delhi.'
  },
  {
    id: 19,
    title: 'Throwing Beyond Limits: Subhi of Pitts Modern School, Gomia to Compete in U-19 Shot Put at CBSE Nationals',
    meta: 'CBSE National Athletics / U-19 Shot Put',
    image: '/image/hrd14.jpg',
    text: 'Subhi of Class XII was selected to represent Pitts Modern School in the CBSE National Athletics Meet 2025–26 at Sant Atulanand Convent School, Varanasi.'
  },
  {
    id: 20,
    title: 'Leadership with Responsibility: Pitts Modern School, Gomia Welcomes Its New Students’ Council 2025–26',
    meta: 'Investiture Ceremony / 08 September 2025',
    image: '/image/inv1.jpg',
    text: 'Pitts Modern School, Gomia celebrated its Investiture Ceremony for the academic session 2025–26 on International Literacy Day, formally inducting student leaders to lead with discipline and service.'
  },
  {
    id: 21,
    title: 'Pitts Modern School ,Gomia Excels at 3rd Jharkhand State Gatka Championship; Girls’ Team Qualifies for Nationals',
    meta: '3rd Jharkhand State Gatka Championship',
    image: '/image/hrd20.jpg',
    text: 'The students of Pitts Modern School, Gomia achieved grand success at the 3rd Jharkhand State Gatka Championship 2025-26 in Dhanbad, with the girls’ team securing qualification for Nationals.'
  },
  {
    id: 22,
    title: 'Pitts Modern School, Gomia Organises Thrilling Inter-House Football Tournament',
    meta: 'Inter-House Football / August 2025',
    image: '/image/aam32.jpg',
    text: 'Pitts Modern School, Gomia successfully organised its Inter-House Football Tournament from August 4, 2025, featuring spirited matches for Junior Boys (VI-VIII) and Senior Boys (IX & XI).'
  },
  {
    id: 23,
    title: 'Pitts Modern School, Gomia, Athletes Set Out for Vikash Vidyalaya to Compete in CBSE Cluster-III on 13.08.25',
    meta: 'CBSE Cluster-III / 13 August 2025',
    image: '/image/sp1.jpg',
    text: 'Pitts Modern School athletes competed at the CBSE Cluster-III Tournament held at Vikash Vidyalaya, Ranchi, under the guidance of Team Manager Mr. Gangadhar Yadav and Coach Ms. Varsha Dwivedi.'
  },
  {
    id: 24,
    title: 'Pitts Modern School, Gomia Excels with 150 Points and Multiple Medals, Secures Runner-Up Position in the 1st District Gatka Championship',
    meta: '1st District Gatka Championship / Runner-Up',
    image: '/image/dc2.jpg',
    text: 'Pitts Modern School, Gomia secured Runner-Up position with 150 points (4 Gold, 6 Silver, 11 Bronze) at the 1st District Gatka Championship at MGM School, Bokaro.'
  },
  {
    id: 25,
    title: 'PITTS MODERN SCHOOL, GOMIA Celebrates the State-Level Selection of Rising Kho-Kho Star Laxmi Marandi',
    meta: '19th Junior State Kho-Kho Selection',
    image: '/image/sp8.jpg',
    text: 'Laxmi Marandi of Class 7 was selected to represent her district in the 19th Junior Jharkhand State Girls Kho-Kho Championship 2025-26 at Jawaharlal Nehru Stadium, Chatra.'
  },
  {
    id: 26,
    title: 'Pitts Modern School , Gomia Honors State Lagori Champions with Grand Welcome',
    meta: 'National Junior Lagori / 3rd Place',
    image: '/image/basketball2.jpg',
    text: 'Pitts Modern School gave a grand welcome to eight students who represented Jharkhand and secured 3rd place in the National Junior Lagori Championship 2025 in Nashik, Maharashtra.'
  },
  {
    id: 27,
    title: 'Jharkhand Girls Shine at Junior National Lagori Championship 2025 — Pitts Modern School, Gomia Leads with 8 Star Players',
    meta: 'National Junior Lagori Championship',
    image: '/image/hrd20.jpg',
    text: 'The Jharkhand Under-17 Girls Lagori Team secured third position in the National Junior Lagori Championship 2025 in Nashik, with 8 star players from Pitts Modern School leading the team.'
  },
  {
    id: 28,
    title: 'Jharkhand U-17 Lagori Team Heads to Nationals — 8 Star Players from Pitts Modern School, Gomia',
    meta: 'National Lagori Selection / June 2025',
    image: '/image/basketball2.jpg',
    text: 'Eight students from Pitts Modern School, Gomia were selected for the Under-17 Junior National Lagori Championship 2025 in Nashik, Maharashtra.'
  },
  {
    id: 29,
    title: 'Pitts Modern School, Gomia, organized the Annual Athletic Meet for the Primary Section on February 8, 2025',
    meta: 'Primary Section Athletic Meet / 08 Feb 2025',
    image: '/image/IMG_3328.jpg',
    text: 'Students from Classes III, IV, and V participated enthusiastically in 100m races, balancing races, and kangaroo races during the Primary Annual Athletic Meet.'
  },
  {
    id: 30,
    title: '46th Annual Athletic Meet of Pitts Modern School, Gomia: A Grand Celebration of Sportsmanship and Team Spirit',
    meta: '46th Annual Athletic Meet / 28 Jan 2025',
    image: '/image/aam1.jpg',
    text: 'The 46th Annual Athletic Meet of Pitts Modern School, Gomia began on 28th January 2025 at IEPL Ground with enthusiastic participation in competitive heats and races.'
  },
  {
    id: 31,
    title: 'Prize Distribution for the Senior Boys Volleyball Tournament at Pitts Modern School, Gomia on October 28, 2024',
    meta: 'Senior Boys Volleyball / 28 October 2024',
    image: '/image/sp1.jpg',
    text: 'Winners of the Senior Boys Volleyball Tournament were felicitated; Vaishali House emerged as champion, with Ashok House as runner-up.'
  },
  {
    id: 32,
    title: 'Celebrating Excellence: Inter House Badminton Tournament Prize Distribution Ceremony on 24.10.24',
    meta: 'Inter-House Badminton / 24 October 2024',
    image: '/image/hrd22.jpg',
    text: 'PITTS MODERN SCHOOL held the prize distribution ceremony for the Inter House Badminton Tournament across Junior and Senior Girls categories.'
  },
  {
    id: 33,
    title: 'Champions of the Field: A Celebration of Sportsmanship at Pitts Modern School on 23.10.2024',
    meta: 'Inter-House Football / 23 October 2024',
    image: '/image/aam32.jpg',
    text: 'The school celebrated participants of the Inter-House Football Tournament, honoring champions Ashok House and runners-up Magadh House.'
  },
  {
    id: 34,
    title: 'PITTS MODERN SCHOOL, GOMIA: Inter-House Exciting Volleyball Showdowns',
    meta: 'Boys Volleyball / 21 October 2024',
    image: '/image/sp8.jpg',
    text: 'Inter-House Exciting Volleyball Showdowns for Boys (Classes IX & XI) brought sports energy and high-level team play to the school court on 21.10.2024.'
  },
  {
    id: 35,
    title: 'PITTS MODERN SCHOOL, GOMIA: Inter-House High-Energy Basketball Matches for Girls',
    meta: 'Girls Basketball / 21 October 2024',
    image: '/image/basketball2.jpg',
    text: 'High-Energy Basketball Matches for Girls (Classes IX & XI) highlighted speed, teamwork, and athletic talent on 21.10.2024.'
  },
  {
    id: 36,
    title: 'PITTS MODERN SCHOOL SHINES AT CBSE CLUSTER-3!',
    meta: 'CBSE Cluster-3 Medals / September 2024',
    image: '/image/hrd14.jpg',
    text: 'Ishika Sahay (Silver Medal in Under-14 100m) and Subhi (Bronze Medal in Under-17 Shot Put) won laurels for Pitts Modern School at CBSE Cluster-3 in Ranchi.'
  },
  {
    id: 37,
    title: 'Pitts Modern School Shines at the 18th Jharkhand State Junior Athletics Championship',
    meta: '18th State Junior Athletics / October 2024',
    image: '/image/aam1.jpg',
    text: 'Six students participated in the 18th Jharkhand State Junior Athletics Championship 2024 at Rajrappa Stadium, Ramgarh, earning recognition during morning assembly.'
  }
];

const pageContent = {
  cultural: {
    eyebrow: 'Home / Co Curricular Activity',
    title: 'Co-curricular Activities',
    splitTitle: ['Co-', 'curricular', 'Activities'],
    intro:
      'There are cultural programs such as Parents Nite, which help students enhance their skills of organization and presentation, co-ordination and co-operation. Participants of every age group get to show their skills - from dancing and acting to singing and fashion. Every important festival is marked by a marvelous performance, organized by the students, and meticulously guided by the teachers.',
    listHeading: 'Have a look of Co-Curricular Activities occurred at Pitts Modern School, Gomia:',
    accent: 'orange',
    motifSet: ['/icons-illustrations/triangle.png', '/icons-illustrations/purple.png', '/icons-illustrations/red-drop.png'],
    items: culturalActivities
  },
  sports: {
    eyebrow: 'Home / Sports Activity',
    title: 'Sports Activities',
    splitTitle: ['Sports', 'Activities'],
    intro:
      'There are sports programs such as Parents Nite, which help students enhance their skills of organization and presentation, co-ordination and co-operation. Participants of every age group get to show their skills - from dancing and acting to singing and fashion. Every important festival is marked by a marvelous performance, organized by the students, and meticulously guided by the teachers.',
    listHeading: 'Have a look:',
    accent: 'blue',
    motifSet: ['/icons-illustrations/yellow-stairs.png', '/icons-illustrations/green-leafs.png', '/icons-illustrations/red.png'],
    items: sportsActivities
  }
};

function GlyphTitle({ lines }) {
  return (
    <h1 className="activity-page-title">
      {lines.map((line, lineIndex) => (
        <span className="activity-title-line" key={line}>
          {line.split('').map((letter, index) => {
            const glyphClass = /[AOCPRS]/i.test(letter) && index % 2 === lineIndex % 2
              ? 'is-glyph'
              : '';
            return (
              <span className={glyphClass} key={`${letter}-${index}`}>
                {letter === ' ' ? '\u00a0' : letter}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function CulturalIllustratedHero() {
  const values = [
    { title: 'Creativity', copy: 'Imagination in action.' },
    { title: 'Confidence', copy: 'Believe. Perform. Shine.' },
    { title: 'Teamwork', copy: 'Together, we achieve more.' },
    { title: 'Presentation', copy: 'Speak. Show. Inspire.' },
    { title: 'Expression', copy: 'Be you. Be heard.' }
  ];

  return (
    <header className="co-curricular-hero" aria-labelledby="co-curricular-title">
      <div className="co-hero-kicker">
        <span className="co-hero-badge">C</span>
        <span>Discover. Develop. Express.</span>
        <i aria-hidden="true" />
      </div>

      <div className="co-hero-copy">
        <h1 className="co-hero-title" id="co-curricular-title">
          <span>Co-</span>
          <span>Curricular</span>
          <span>Activities</span>
        </h1>

        <div className="co-hero-statement">
          <span aria-hidden="true" />
          <p>Beyond the classroom, talent comes alive.</p>
        </div>
      </div>

      <div className="co-hero-stage" aria-hidden="true">
        <span className="co-hero-orbit co-hero-orbit-one" />
        <span className="co-hero-orbit co-hero-orbit-two" />
        <span className="co-hero-arch" />
        <span className="co-hero-dot-field" />
        <img className="co-hero-figure co-hero-dancer" src="/image/dancer.png" alt="" />
        <img className="co-hero-figure co-hero-cellist" src="/image/cellist.png" alt="" />
        <img className="co-hero-figure co-hero-singer" src="/image/singer.png" alt="" />
      </div>

      <aside className="co-hero-aside">
        <div className="co-hero-rings" aria-hidden="true">
          <span />
          <span />
        </div>
        <p>
          Our co-curricular programs nurture the whole student. Through dance, music,
          theatre, art, debate, and cultural initiatives, learners discover their passions
          and develop creativity, confidence, teamwork, presentation skills, and
          self-expression.
        </p>
        <span className="co-hero-mini-rule" aria-hidden="true" />
        <ul className="co-hero-values" aria-label="Co-curricular values">
          {values.map((value, index) => (
            <li key={value.title}>
              <span className={`co-value-mark co-value-mark-${index + 1}`} aria-hidden="true" />
              <span>
                <strong>{value.title}</strong>
                <small>{value.copy}</small>
              </span>
            </li>
          ))}
        </ul>
      </aside>

      <p className="co-hero-vertical">Activities today. Excellence tomorrow.</p>

      <div className="co-hero-footer">
        <strong>01</strong>
        <span>Learn | Grow | Lead</span>
        <i aria-hidden="true" />
        <em aria-hidden="true" />
      </div>
    </header>
  );
}

function ActivityIndexPage({ variant }) {
  const content = pageContent[variant];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = content.items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = content.items.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className={`activity-page activity-page-${content.accent}`}>
      <img className="activity-motif activity-motif-a" src={content.motifSet[0]} alt="" />
      <img className="activity-motif activity-motif-b" src={content.motifSet[1]} alt="" />
      <img className="activity-motif activity-motif-c" src={content.motifSet[2]} alt="" />

      <div className="activity-page-shell">
        {variant === 'cultural' ? (
          <CulturalIllustratedHero />
        ) : (
          <header className="activity-page-hero">
            <span className="activity-breadcrumb">{content.eyebrow}</span>
            <GlyphTitle lines={content.splitTitle} />
            <p>{content.intro}</p>
          </header>
        )}

        <div className="activity-list-heading">
          <span aria-hidden="true">///</span>
          <h2>{content.listHeading}</h2>
        </div>

        {/* ENTRY LIST FOR CURRENT PAGE */}
        <div className="activity-entry-list">
          {currentItems.map((item, index) => {
            const itemNumber = startIndex + index + 1;
            return (
              <article className="activity-entry" key={`${item.title}-${index}`}>
                <div className="activity-entry-copy">
                  <span className="activity-entry-count">{String(itemNumber).padStart(2, '0')}</span>
                  <div>
                    <p className="activity-entry-meta">{item.meta}</p>
                    <h3>{item.title}</h3>
                    <p className="activity-entry-text">{item.text}</p>
                  </div>
                </div>

                <figure className="activity-entry-media">
                  <img src={item.image} alt={item.title} loading={index > 2 ? 'lazy' : 'eager'} />
                </figure>
              </article>
            );
          })}
        </div>

        {/* SWISS EDITORIAL PAGINATION BAR */}
        {totalPages > 1 && (
          <div className="activity-pagination-bar">
            <div className="activity-pagination-info">
              <span>Showing <strong>{startIndex + 1}–{endIndex}</strong> of <strong>{totalItems}</strong> events</span>
            </div>

            <div className="activity-pagination-controls">
              <button
                className="activity-page-btn nav-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
              >
                <ChevronLeft size={18} />
                <span>PREV</span>
              </button>

              <div className="activity-page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`activity-page-num ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                className="activity-page-btn nav-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
              >
                <span>NEXT</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function CulturalCoCurricularPage() {
  return <ActivityIndexPage variant="cultural" />;
}

export function SportsActivityPage() {
  return <ActivityIndexPage variant="sports" />;
}
