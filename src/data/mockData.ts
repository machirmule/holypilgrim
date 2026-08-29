import { SacredSite, PilgrimageCircuit, FestivalEvent, SpiritualRoute, JournalArticle, Testimonial } from '../types';

export const SACRED_DESTINATIONS: SacredSite[] = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    location: 'Uttar Pradesh, India',
    state: 'Uttar Pradesh',
    faith: 'Hindu',
    categoryTag: 'Hindu Tradition',
    subtitle: 'The City of Light',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA08BilH02ZnE2kD2FSW7IPOgaOpa238ymSI3qPBpLgHDI_MLsDbpb7EqWJGwLrnfpz099yJT6SfA3Fya4Mwq-dMnWYl0AP8yxmWw1UQAF_6Kx8OWSMRW6F_mU2yoTwCva6pNULFz7PR81I791IxXohRXSdO5q-fowS97TzUlzT2W0vOEl-MH1U9pGb2TYiRvLkn9nXlWpt9um0rTOehPSN_dQhOhT_7G477EtgVoBUIccRgOeVPIo',
    description: 'One of the oldest continuously inhabited cities in the world, a profound center for spiritual seeking and liberation along the sacred Ganges.',
    spiritualEssence: 'Varanasi (Kashi) is not merely a destination; it is a profound spiritual experience. It is believed that bathing in the Ganges here washes away sins, and dying here grants moksha (liberation from the cycle of rebirth). The city vibrates with millennia of devotion, chanting, and ancient rituals.',
    walkingIntensity: 'High',
    wheelchairAccess: 'Limited',
    accessibilityTips: 'The old city consists of narrow, crowded alleys and steep steps leading down to the ghats. Wheelchair access is very limited near the riverfront. We strongly recommend booking a special assisted tour or using e-rickshaws where permissible.',
    bestTimeToVisit: 'October to March (Pleasant weather & auspicious festival season)',
    darshanTimings: {
      morning: '03:00 AM - 11:00 AM (Mangala Aarti at 3:00 AM)',
      evening: '04:00 PM - 11:00 PM (Shringar Aarti at 9:00 PM)',
      specialAarti: 'Maha Aarti at Dashashwamedh Ghat at 6:45 PM daily',
    },
    etiquette: {
      dressCode: 'Modest Attire Required. Shoulders and knees must be covered. Traditional Indian wear (Kurta / Saree) is preferred.',
      footwear: 'Shoes and leather articles must be deposited in cloakrooms outside temple premises.',
      photography: 'Strictly prohibited inside the main sanctum of Kashi Vishwanath.',
      customs: [
        'Offer flowers (Bel patra) and holy water gently to the Shiva Lingam.',
        'Always maintain silence during sanctum darshan.',
        'Respect funeral pyres at Manikarnika Ghat with quiet reverence (no cameras).'
      ]
    },
    keyAttractions: [
      {
        id: 'kashi-vishwanath',
        name: 'Kashi Vishwanath Temple',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARJwG8IroWFh3iZz-hvcNdPul8VDQjJG48zHXyhEuX5KIcj9a2GM1lX_-DTvHFocGKXR0hn4WxZ3B75gJlcaMg7MOHJGlyO_-LBw-wGi4v2oTMfsNQEyR6jUsqKsUvnnT8QTKV1LYgvfnvL3JiqbDBoU0eOB3l8PAe-Ufo5o_TxeYaui4sgsWp8BlEIxN6B7brCLpv4lx-fCOD8kvxmgkCbJ4DsuVfHXXvfz61KF19d3mIBUA2wio',
        description: 'One of the twelve supreme Jyotirlingas dedicated to Lord Shiva, capped with a magnificent pure-gold spire donated by Maharaja Ranjit Singh.',
        highlight: 'Sanctum Jyotirlinga Darshan & Corridor'
      },
      {
        id: 'dashashwamedh-ghat',
        name: 'Dashashwamedh Ghat',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPOu9PI1c0FTAhPLYiljlGQ4682En_iSCgArI5bq-LCu1GgRqezRJ0N5k0JWlsDnN9ec4dL_pRH1cf6V7Ce3-5EGFHCJL9i4Qma56sLnUNE6_keUuIbzINOlvBYadkvEnegSME5E4wC6sbpWvTOB3cGPRuXB_VrEl-aT-Bdr9zT5AD-0wUj9xL6ThxrtkfaSSFyA5exAKRXfQPshUMZQhKS6L7KHoapYjNz4G9cNj-3lzGsV3Jk_Y',
        description: 'The main ghat in Varanasi on the Ganga River, famous for its spectacular evening Aarti ceremony conducted by Vedic priests with rhythmic chants and brass oil lamps.',
        highlight: 'Grand Evening Maha Aarti'
      },
      {
        id: 'sarnath-buddhist',
        name: 'Sarnath Deer Park & Dhamek Stupa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRsr5YMsv31VRtlKvR1NFwHEOL0dFrlygNuwVCzkvDymw993fqP_u4BCNRiLROhAc1wxKTu-AsOAeAwwXqTPAUl4wNAfuSBwbTWwwLwQqzT7eQeFUEVl3wiyYz_rZ6GkS8QI_4UVKjDMD__susFvttyzF8cenN1b0tDeJGerOPZnrWxRdLgWYpneyT3pIo67Ryxvz19mTb-W095o1ONnZS6KEtAOTV9OtbecgbA2SlNTU4F0ITcN8',
        description: 'Located 10km from Varanasi, this sacred site is where Lord Buddha delivered his first sermon (Dhammacakkappavattana Sutta) after attaining enlightenment.',
        highlight: 'Birthplace of Buddhist Sangha'
      }
    ],
    suggestedItinerary: {
      days: 2,
      title: 'Varanasi 2-Day Sacred Awakening',
      schedule: [
        {
          day: 1,
          dayTitle: 'Day 1: The Awakening',
          events: [
            {
              time: '05:30 AM',
              icon: 'wb_twilight',
              title: 'Sunrise Boat Ride along the Ganges',
              description: 'Witness morning snan (bathing) and chants at Assi Ghat, gliding past historical ghats bathed in golden dawn.'
            },
            {
              time: '09:00 AM',
              icon: 'temple_hindu',
              title: 'Morning Darshan at Kashi Vishwanath',
              description: 'Pass through the modern Temple Corridor. VIP pass is recommended for seniors and families to bypass long lines.'
            },
            {
              time: '06:30 PM',
              icon: 'local_fire_department',
              title: 'Evening Ganga Aarti at Dashashwamedh Ghat',
              description: 'Experience the world-renowned ritual with sacred Vedic chants, conch blowing, and multi-tier brass oil lamps.'
            }
          ]
        },
        {
          day: 2,
          dayTitle: 'Day 2: Depth & History',
          events: [
            {
              time: '08:30 AM',
              icon: 'menu_book',
              title: 'Visit to Sarnath & Archeological Museum',
              description: 'Stand before the ancient Dhamek Stupa where Buddha gave his first sermon, and view the Ashoka Pillar capital.'
            },
            {
              time: '03:30 PM',
              icon: 'explore',
              title: 'Walking Tour of Ancient Galis & Silk Weavers',
              description: 'Explore the narrow medieval lanes, traditional sweet shops (Malaiyyo in winter), and heritage Banarasi silk handlooms.'
            },
            {
              time: '07:00 PM',
              icon: 'self_improvement',
              title: 'Meditation & Floating Diya Offering',
              description: 'Release floral floating lamps into the Ganges with personal prayers and quiet introspection.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    location: 'Uttar Pradesh, India',
    state: 'Uttar Pradesh',
    faith: 'Hindu',
    categoryTag: 'Sacred Heritage',
    subtitle: 'The Eternal Realm of Shri Ram',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuxRAYq0pCaTyVU3apNuUjZAYCz3t_zw2Dwj0pMKnbGbwfJcikSjSuhiQ2BZm9MTOtTWRnw8ZTmtIDSV0yPDuPvI3pWgY_xFbace85RM4O7mH7f2WAZTYbBpTpZ1jFIHNdAJ1kMa_UNqRResgz-czaszaKqFVYZa1hvejvFn-8fL2aGkTXUa_hG9JPSXgXGtwkD5DVrLZJwyuCaHBsifK3X2gVivBri2C9Mb20GAaEa-P46kydDTk',
    description: 'The revered birthplace of Lord Rama on the banks of the sacred Saryu River, featuring the grand Ram Mandir and ancient Hanuman Garhi.',
    spiritualEssence: 'Ayodhya stands as an emblem of dharma, devotion, and righteous governance. Taking a holy dip in the Saryu River and visiting the sacred shrines fills pilgrims with timeless inner peace and joy.',
    walkingIntensity: 'Moderate',
    wheelchairAccess: 'Good',
    accessibilityTips: 'The new Ram Mandir complex has dedicated battery-operated cart shuttles, ramps, and wheelchair services for seniors.',
    bestTimeToVisit: 'October to March & Ram Navami (Spring)',
    darshanTimings: {
      morning: '06:30 AM - 12:00 PM (Shringar Aarti at 6:30 AM)',
      evening: '02:00 PM - 09:30 PM (Sandhya Aarti at 7:30 PM)',
      specialAarti: 'Saryu River Maha Aarti at Ram Ki Paidi at 6:45 PM',
    },
    etiquette: {
      dressCode: 'Traditional Indian attire or clean modest clothing.',
      footwear: 'Free electronic shoe lockers at Pilgrimage Facilitation Centre.',
      photography: 'Not allowed in sanctum sanctorum.',
      customs: ['Visit Hanuman Garhi first as per tradition to seek Lord Hanuman’s permission before Ram Mandir darshan.']
    },
    keyAttractions: [
      {
        id: 'ram-janmabhoomi',
        name: 'Shri Ram Janmabhoomi Mandir',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuxRAYq0pCaTyVU3apNuUjZAYCz3t_zw2Dwj0pMKnbGbwfJcikSjSuhiQ2BZm9MTOtTWRnw8ZTmtIDSV0yPDuPvI3pWgY_xFbace85RM4O7mH7f2WAZTYbBpTpZ1jFIHNdAJ1kMa_UNqRResgz-czaszaKqFVYZa1hvejvFn-8fL2aGkTXUa_hG9JPSXgXGtwkD5DVrLZJwyuCaHBsifK3X2gVivBri2C9Mb20GAaEa-P46kydDTk',
        description: 'A monument of stone architecture in Nagara style, carved from pink Bansi Paharpur sandstone without iron reinforcements.',
        highlight: 'Ram Lalla Sanctum'
      },
      {
        id: 'hanuman-garhi',
        name: 'Hanuman Garhi',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo4tSggheRrAJaoJphIb9F0zHYXzwukll1Iq_3LPrHgPE79LenAKivLTfpgVy0ZEiMuBsIoik1i-_CwgQBS9Ezhzd-kZJJ0RpNCp5l3n7b_cs-ZuDIMbNNWCP7ESIVnlIepIs8qgr9kHPwKx6lMuhsa2qf2MZcZGMDNxX_V6-zsgSTdy56KvGrcEGfyKSMqR9D4N070tV6RpwFeYhsTaZN43nNvN_4s1PJp3_WnJDu1EOj7VRdzqw',
        description: 'A 10th-century temple complex perched on a hillock with 76 steps, where Lord Hanuman is believed to protect the city.',
        highlight: 'Guardian Deity of Ayodhya'
      }
    ],
    suggestedItinerary: {
      days: 1,
      title: 'Ayodhya Day of Devotion',
      schedule: [
        {
          day: 1,
          dayTitle: 'Full Day Sacred Circuit',
          events: [
            { time: '06:00 AM', icon: 'water_drop', title: 'Saryu River Holy Bath & Morning Prayers', description: 'Begin at Ram Ki Paidi with quiet morning river meditation.' },
            { time: '08:00 AM', icon: 'temple_hindu', title: 'Hanuman Garhi Darshan', description: 'Climb the steps to seek blessings from Lord Hanuman.' },
            { time: '10:30 AM', icon: 'temple_hindu', title: 'Shri Ram Janmabhoomi Mandir Darshan', description: 'Experience the serenity of the main sanctum.' },
            { time: '06:30 PM', icon: 'local_fire_department', title: 'Saryu Aarti at Ram Ki Paidi', description: 'Illuminated musical aarti along the river steps.' }
          ]
        }
      ]
    }
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    location: 'Uttarakhand, India',
    state: 'Uttarakhand',
    faith: 'Wellness',
    categoryTag: 'Yoga & Meditation',
    subtitle: 'Gateway to the Himalayas & Yoga Capital',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUxqqi2kAUyB5ZiKGvzBmqK-qpVjdfb57jtwZNgIA08abc0Z2meROudl_UfMcGkodyfo-xak6yJyqOKYDoNpyQzQ--ktTeCu1BCU6N6FCTcIeoL4ThwJ6uRWWIxOfyVGARdg9g2r-vIUoUtphgVmO6EVBxn5TKXZ0HoknEnSuM9GD7q0k9cTf_Yn0Q73NU718P5OTpe6fJ8LUMgjUPIa9p7noyzfWFKvM2XaaFFKuABqx6SvMg7_g',
    description: 'Nestled where the emerald Ganges rushes from the Himalayan foothills, world-famous for meditation ashrams, Vedic study, and spiritual renewal.',
    spiritualEssence: 'Rishikesh is revered as the Tapobhumi where sages have meditated for thousands of years. The crystal-clear waters and mountain air foster deep healing and contemplation.',
    walkingIntensity: 'Moderate',
    wheelchairAccess: 'Partial',
    accessibilityTips: 'Main ashrams have flat entryways; Ram Jhula and Triveni Ghat have accessible viewpoints for Ganga Aarti.',
    bestTimeToVisit: 'September to April',
    darshanTimings: {
      morning: '05:00 AM - 10:00 AM (Ashram Yoga & Meditation)',
      evening: '04:00 PM - 08:00 PM',
      specialAarti: 'Triveni Ghat & Parmarth Niketan Ganga Aarti at 6:00 PM',
    },
    etiquette: {
      dressCode: 'Comfortable, modest clothing in light cotton or linen.',
      footwear: 'Remove shoes at ghats and yoga shalas.',
      photography: 'Permitted in outdoor areas, refrain during quiet meditation sessions.',
      customs: ['Maintain silence during ashram satsangs and morning sadhana.']
    },
    keyAttractions: [
      {
        id: 'triveni-ghat',
        name: 'Triveni Ghat Maha Aarti',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUxqqi2kAUyB5ZiKGvzBmqK-qpVjdfb57jtwZNgIA08abc0Z2meROudl_UfMcGkodyfo-xak6yJyqOKYDoNpyQzQ--ktTeCu1BCU6N6FCTcIeoL4ThwJ6uRWWIxOfyVGARdg9g2r-vIUoUtphgVmO6EVBxn5TKXZ0HoknEnSuM9GD7q0k9cTf_Yn0Q73NU718P5OTpe6fJ8LUMgjUPIa9p7noyzfWFKvM2XaaFFKuABqx6SvMg7_g',
        description: 'The confluence of Ganga, Yamuna, and Saraswati rivers where Vedic priests perform the daily sunset lamp offering.',
        highlight: 'Soulful Riverbank Chants'
      },
      {
        id: 'parmarth-niketan',
        name: 'Parmarth Niketan Ashram',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbco_s-v2-0lbRyke8fqBvC7xNnrNfjY9SKKMyE1p86ukP8FLUtYLBnnOycFGZITvNg1NUBRN0PCy-tgXJtKDqA1Zhn_yZ_UjAdNBbZAhymkAtwnlyR27uKy5J9n86DwwOpQjbMgfE1feynh9JRXHbBZp3hikRFyi9ZN-Qiw_1P9tsBckQVqiJzDI16S-idwbG9qLhkyBbf2ETv2zmdxi5hvb4wW57Vapm6v2hTGObH1huB9CwMFs',
        description: 'One of the largest spiritual institutions in Rishikesh, hosting evening kirtans and tranquil gardens.',
        highlight: 'Havan & Universal Peace Prayers'
      }
    ],
    suggestedItinerary: {
      days: 3,
      title: 'Rishikesh 3-Day Mind & Soul Retreat',
      schedule: [
        {
          day: 1,
          dayTitle: 'Day 1: Ashram Arrival & River Blessing',
          events: [
            { time: '04:00 PM', icon: 'explore', title: 'Walk across Ram Jhula suspension bridge', description: 'Gaze over the sacred Ganges and forested hills.' },
            { time: '06:00 PM', icon: 'local_fire_department', title: 'Parmarth Niketan Ganga Aarti', description: 'Join devotees singing melodious bhajans at sunset.' }
          ]
        },
        {
          day: 2,
          dayTitle: 'Day 2: Vedic Yoga & Meditation',
          events: [
            { time: '06:30 AM', icon: 'self_improvement', title: 'Sunrise Hatha Yoga & Pranayama', description: 'Guided session with an experienced Himalayan yogi.' },
            { time: '02:00 PM', icon: 'spa', title: 'Ayurvedic Wellness Consultation', description: 'Herbal therapies and natural balance assessment.' }
          ]
        },
        {
          day: 3,
          dayTitle: 'Day 3: Sacred Caves & Vashishta Gufa',
          events: [
            { time: '09:00 AM', icon: 'nature', title: 'Silent Meditation at Sage Vashishta Cave', description: 'A timeless cave on the riverbanks revered for silent dhyana.' }
          ]
        }
      ]
    }
  },
  {
    id: 'tirupati',
    name: 'Tirupati Balaji',
    location: 'Andhra Pradesh, India',
    state: 'Andhra Pradesh',
    faith: 'Hindu',
    categoryTag: 'Heritage & Devotion',
    subtitle: 'Abode of Sri Venkateswara Swamy',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo4tSggheRrAJaoJphIb9F0zHYXzwukll1Iq_3LPrHgPE79LenAKivLTfpgVy0ZEiMuBsIoik1i-_CwgQBS9Ezhzd-kZJJ0RpNCp5l3n7b_cs-ZuDIMbNNWCP7ESIVnlIepIs8qgr9kHPwKx6lMuhsa2qf2MZcZGMDNxX_V6-zsgSTdy56KvGrcEGfyKSMqR9D4N070tV6RpwFeYhsTaZN43nNvN_4s1PJp3_WnJDu1EOj7VRdzqw',
    description: 'Perched atop the seven sacred hills of Tirumala, this is one of the most visited and revered sacred sanctuaries on Earth.',
    spiritualEssence: 'Lord Venkateswara, an incarnation of Lord Vishnu, resides here in Kali Yuga to grant boons, peace, and spiritual liberation to devotees who surrender with wholehearted faith.',
    walkingIntensity: 'Moderate',
    wheelchairAccess: 'Good',
    accessibilityTips: 'Special Senior Citizen & Differently-Abled Darshan tokens allow quick, barrier-free access with dedicated seating and battery car escorts.',
    bestTimeToVisit: 'September to February & Brahmotsavam (Navratri)',
    darshanTimings: {
      morning: '03:00 AM - 11:30 AM (Suprabhata Seva at 3:00 AM)',
      evening: '12:30 PM - 11:30 PM (Ekantha Seva at 11:30 PM)',
      specialAarti: 'Kalyanotsavam daily at 10:30 AM',
    },
    etiquette: {
      dressCode: 'Strict Traditional Attire: Dhoti/Kurta for Men, Saree or Salwar Kameez with Dupatta for Women.',
      footwear: 'No footwear anywhere on the Tirumala temple hill.',
      photography: 'Electronic devices and cameras must be deposited before entering the queue complex.',
      customs: ['Collect the sacred Tirupati Laddu Prasadam blessed in the sanctum.']
    },
    keyAttractions: [
      {
        id: 'tirumala-temple',
        name: 'Sri Venkateswara Swamy Temple',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo4tSggheRrAJaoJphIb9F0zHYXzwukll1Iq_3LPrHgPE79LenAKivLTfpgVy0ZEiMuBsIoik1i-_CwgQBS9Ezhzd-kZJJ0RpNCp5l3n7b_cs-ZuDIMbNNWCP7ESIVnlIepIs8qgr9kHPwKx6lMuhsa2qf2MZcZGMDNxX_V6-zsgSTdy56KvGrcEGfyKSMqR9D4N070tV6RpwFeYhsTaZN43nNvN_4s1PJp3_WnJDu1EOj7VRdzqw',
        description: 'The golden Ananda Nilayam vimanam atop the sanctum sanctorum housing the majestic self-manifested deity.',
        highlight: 'Ananda Nilayam & Golden Gopuram'
      },
      {
        id: 'padmavathi-temple',
        name: 'Sri Padmavathi Ammavari Temple',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7hy4NIFoibCGZ543sO6ljzZu4Zp4Nn0qFyhyng-doSnXnVqe_Q2KEaDDCC0GI3iDRjimTIbB97g1hq5oDNsDKh8Bev98w8YnrAdHyzf1kR9HX2kwHnDDN8T1tH9yKXq8jSNTh2iR4BtAv5eFG8EyDbj5UClMr34A8JYdlN31m0jLPK4_6jYGLDidJsUdQy8EHs2Iy5dd8raupG2myZ7fGN2bRuUEbe30p-JfstpbE2FRZIzX4Po4',
        description: 'Located in Tiruchanur, the sacred shrine of Goddess Lakshmi (Padmavathi), visited customarily after Tirumala.',
        highlight: 'Divine Motherly Grace'
      }
    ],
    suggestedItinerary: {
      days: 2,
      title: 'Tirupati 2-Day Complete Darshan',
      schedule: [
        {
          day: 1,
          dayTitle: 'Day 1: Tirumala Hill Ascent & Lord Balaji Darshan',
          events: [
            { time: '08:00 AM', icon: 'directions_bus', title: 'Ghat Road Ascent to Tirumala', description: 'Scenic drive winding through the Seven Hills with breathtaking valley views.' },
            { time: '11:00 AM', icon: 'temple_hindu', title: 'Special Entry Darshan of Lord Venkateswara', description: 'Proceed through the Vaikuntham queue complex for divine darshan.' },
            { time: '04:00 PM', icon: 'shopping_bag', title: 'Laddu Prasadam & Matrushri Tarigonda Annadanam', description: 'Receive holy prasad and partake in the free sacred dining hall.' }
          ]
        },
        {
          day: 2,
          dayTitle: 'Day 2: Goddess Padmavathi & Kapilatheertham',
          events: [
            { time: '08:30 AM', icon: 'temple_hindu', title: 'Tiruchanur Sri Padmavathi Temple Darshan', description: 'Seek blessings of the Goddess of abundance and compassion.' },
            { time: '02:00 PM', icon: 'water_drop', title: 'Kapila Theertham Waterfalls & Shiva Shrine', description: 'The only Shiva temple in Tirupati at the foot of Tirumala hills.' }
          ]
        }
      ]
    }
  },
  {
    id: 'amritsar',
    name: 'Amritsar (Golden Temple)',
    location: 'Punjab, India',
    state: 'Punjab',
    faith: 'Sikh',
    categoryTag: 'Sikh Sanctuaries',
    subtitle: 'Sri Harmandir Sahib',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI5_Kc3j19qE__DfQgfB8pyMxRKBBn00mQ4_HM53c9b9Z4sjAqc_qBZoIXJcm6NDbYDw5mqSDoFxM_4DLauJv60viUYSMgVOzXiXNSYb-JvIzRW7A-9mbT_aqDLQxwIqKoXBhNiBwdSiwOBueuHHTk6tPvi4SkW9ISIFx3xce_NrebC6RfCMsbhlv4SfSSVpTq3JHpljlKQeDn71_rnKV8SxD6g1IlxnhnkTHkcIy-bUnUfgrhZIA',
    description: 'The golden jewel of Sikhism, open to all faiths in universal brotherhood, surrounded by the healing Amrit Sarovar lake.',
    spiritualEssence: 'Sri Harmandir Sahib represents divine humility, equality, and continuous community service (Seva). Listening to 24/7 Gurbani kirtan echoing across the glistening nectar pool heals the spirit.',
    walkingIntensity: 'Low',
    wheelchairAccess: 'Full',
    accessibilityTips: 'Completely wheelchair accessible with free loaner wheelchairs and volunteer attendants at all four entry portals.',
    bestTimeToVisit: 'October to March & Gurpurab celebrations',
    darshanTimings: {
      morning: '03:00 AM - 10:00 PM (Palki Sahib ceremony at 4:30 AM)',
      evening: '10:00 PM (Sukh-Aasan ceremony)',
      specialAarti: 'Continuous Live Gurbani Kirtan throughout the day and night',
    },
    etiquette: {
      dressCode: 'Head must be fully covered at all times (scarves available freely). Modest clothing required.',
      footwear: 'Shoes and socks removed; wash feet in shallow pool before entry.',
      photography: 'Permitted in outer parikrama; strictly forbidden inside the inner sanctum.',
      customs: ['Partake in Guru Ka Langar, the world’s largest free community kitchen open to everyone.']
    },
    keyAttractions: [
      {
        id: 'harmandir-sahib',
        name: 'Sri Harmandir Sahib (Golden Sanctum)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI5_Kc3j19qE__DfQgfB8pyMxRKBBn00mQ4_HM53c9b9Z4sjAqc_qBZoIXJcm6NDbYDw5mqSDoFxM_4DLauJv60viUYSMgVOzXiXNSYb-JvIzRW7A-9mbT_aqDLQxwIqKoXBhNiBwdSiwOBueuHHTk6tPvi4SkW9ISIFx3xce_NrebC6RfCMsbhlv4SfSSVpTq3JHpljlKQeDn71_rnKV8SxD6g1IlxnhnkTHkcIy-bUnUfgrhZIA',
        description: 'Covered with 500kg of pure gold foil, resting serenely in the center of the holy Amrit Sarovar water basin.',
        highlight: 'Divine Nectar Pool & Palki Sahib'
      }
    ],
    suggestedItinerary: {
      days: 2,
      title: 'Amritsar 2-Day Spiritual Seva',
      schedule: [
        {
          day: 1,
          dayTitle: 'Day 1: Golden Temple & Langar Seva',
          events: [
            { time: '04:30 AM', icon: 'wb_twilight', title: 'Palki Sahib Morning Ceremony', description: 'Witness the ceremonial carrying of the Guru Granth Sahib into the golden sanctum.' },
            { time: '11:00 AM', icon: 'restaurant', title: 'Volunteer in Guru Ka Langar', description: 'Join in preparing rotis, serving dhal, and sharing a communal meal on the floor.' },
            { time: '07:30 PM', icon: 'nightlight', title: 'Nighttime Illumination & Parikrama', description: 'Sit beside the illuminated Sarovar listening to live heavenly hymns.' }
          ]
        }
      ]
    }
  }
];

export const POPULAR_PILGRIMAGES: PilgrimageCircuit[] = [
  {
    id: 'char-dham',
    name: 'Char Dham Yatra',
    tagline: '4 Sacred Himalayan Shrines',
    faith: 'Hindu',
    duration: '12-14 Days',
    intensity: 'High Intensity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj9HbLIzqYvcwvLbKYQWtN-qJBR5i2zv6tDR-3YfGO9zDq4Wgi6zB9bD9sRu3NlmnCVIdSx8Llshex8XIuy8WOOP8hplmVb9rz7jAoRHMm2V_27AQE-DIpRFfaWDxO4mNb-jFFm-zixY4vPUWCfCKdimMbcg6_nQDap1LeIUE8KVEFA7WwP7wWZJBbNjjmR6RRwth5OyUoFOMzw11LriTIV9dbxMNEZboyjx2gTpPNWlUA_iq4Qao',
    description: 'The supreme Himalayan pilgrimage in Uttarakhand covering Yamunotri, Gangotri, Kedarnath, and Badrinath, opening doors to spiritual rebirth.',
    stopsCount: 4,
    stops: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    keyTemples: ['Kedarnath Jyotirlinga', 'Badrinath Dham', 'Gangotri Bhagirathi Temple', 'Yamunotri Divya Shila'],
    highlights: ['Scenic Himalayan helicopter options', 'Holy dips in hot springs', 'Alaknanda & Mandakini confluences'],
    seniorFriendly: false
  },
  {
    id: 'jyotirlinga-circuit',
    name: '12 Jyotirlingas',
    tagline: 'The Supreme Shrines of Shiva',
    faith: 'Hindu',
    duration: '14-21 Days',
    intensity: 'Moderate',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIF1NrSom1I74IOCCTGjbvygAY7edGurKDhnOZP0ZgWcgKFlDnklYtvj9AlonZ0AZ02L6VYmJWLcRDt4nkxyONlewc6nMSWVJPMXiRzlD0KICmErTG4ajTGroEM0HrRAeiwY5DNKlttWezrVZwLtsxgtmTQF0zTASx0_iUj_dbvuC-WxfVh5X572Hy7lTX_IqnE_b4PPPxfgWz9glQE88n58KZk2rZjr4poStPlCnUWl77k6OM_nY',
    description: 'A deeply sacred circuit spanning the twelve eternal pillars of cosmic light where Lord Shiva manifested in infinite radiance.',
    stopsCount: 12,
    stops: ['Somnath', 'Mallikarjuna', 'Mahakaleshwar', 'Omkareshwar', 'Kedarnath', 'Bhimashankar', 'Kashi Vishwanath', 'Trimbakeshwar', 'Baidyanath', 'Nageshwar', 'Rameshwaram', 'Grishneshwar'],
    keyTemples: ['Mahakaleshwar Bhasma Aarti', 'Somnath Sea Temple', 'Rameshwaram 22 Theerthams'],
    highlights: ['Ancient temple architecture', 'Sacred Bhasma rituals', 'Coastal & mountain energy centers'],
    seniorFriendly: true
  },
  {
    id: 'shakti-peethas',
    name: '51 Shakti Peethas',
    tagline: 'Divine Feminine Sanctuaries',
    faith: 'Hindu',
    duration: 'Multi-Leg Circuits',
    intensity: 'Reflective',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7GtR59ILHOK3VPYlGOYZVrhXLKF7p9v-p3yoq4CyPNTFEurW50GttCp-2kQ9GS9n2rHMRH4larE--ac04WzIf_Xu4ubxX072b9CUSrRPpuaCKiZ1l6SKxIi7SHWFEVQLBRzDTz62hPXtA8ja6Wf0Ai7q7_K-FlF2O_dRSck1WL6fELFRjw2cO6nJmFv8drClPdxh4Kowoewb13DvHDPyHD4dQyqcbuFzlYVSLjxoV9O5qyFbZaPk',
    description: 'Revered holy sanctuaries representing the sacred cosmic energy of the Divine Mother (Maa Shakti) scattered across the Indian subcontinent.',
    stopsCount: 51,
    stops: ['Kamakhya (Assam)', 'Kalighat (Kolkata)', 'Vaishno Devi (Jammu)', 'Jwalaji (Himachal)', 'Tarapith (Bengal)'],
    keyTemples: ['Maa Kamakhya Devalaya', 'Mata Vaishno Devi Shrine', 'Dakshineswar Kali'],
    highlights: ['Tantric and devotional traditions', 'Sacred hill shrines', 'Empowering spiritual resonance'],
    seniorFriendly: true
  }
];

export const SPIRITUAL_ROUTES: SpiritualRoute[] = [
  {
    id: 'golden-triangle-spirituality',
    title: 'The Golden Triangle of Spirituality',
    route: 'Varanasi - Prayagraj - Ayodhya',
    duration: '7 Days',
    description: 'Experience the holy Sangam bath, the ancient alleys of Kashi, and the newly consecrated Ram Mandir in one seamless spiritual circuit.',
    stops: ['Varanasi Ghats & Kashi Vishwanath', 'Prayagraj Triveni Sangam & Bade Hanuman', 'Ayodhya Ram Janmabhoomi & Saryu Aarti']
  },
  {
    id: 'southern-temple-trail',
    title: 'Southern Temple Trail',
    route: 'Chennai - Mahabalipuram - Thanjavur - Madurai - Rameshwaram',
    duration: '8 Days',
    description: 'Marvel at soaring Dravidian gopurams, living Chola temples, musical pillars, and sacred ocean theertham baths.',
    stops: ['Kapaleeshwarar Temple', 'Brihadeeswarar Temple', 'Madurai Meenakshi Amman', 'Ramanathaswamy Temple']
  },
  {
    id: 'buddhist-circuit',
    title: 'Footsteps of the Buddha',
    route: 'Bodh Gaya - Nalanda - Rajgir - Sarnath - Kushinagar',
    duration: '6 Days',
    description: 'Trace the momentous life of Gautama Buddha from the Mahabodhi Tree of enlightenment to his first sermon and Mahaparinirvana.',
    stops: ['Mahabodhi Temple', 'Ancient Nalanda University', 'Vulture Peak Meditation', 'Sarnath Dhamek Stupa', 'Parinirvana Stupa']
  }
];

export const UPCOMING_FESTIVALS: FestivalEvent[] = [
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    month: 'MAR',
    day: '08',
    dateStr: 'March 8, 2026',
    locations: ['Varanasi', 'Ujjain', 'Somnath', 'Isha Yoga Centre'],
    significance: 'The grand celestial night of Lord Shiva, celebrating the cosmic dance and marriage of Shiva and Parvati.',
    rituals: ['All-night vigil (Jagaran)', 'Continuous Rudrabhishekham with Bilva leaves', 'Fasting & meditation']
  },
  {
    id: 'holi',
    name: 'Holi (Braj Mahotsav)',
    month: 'MAR',
    day: '25',
    dateStr: 'March 25, 2026',
    locations: ['Vrindavan', 'Mathura', 'Barsana', 'Nandgaon'],
    significance: 'The joyous festival of colors celebrating the divine love of Radha and Krishna, and the victory of devotion over arrogance.',
    rituals: ['Lathmar Holi of Barsana', 'Phoolon ki Holi at Banke Bihari Temple', 'Chanting of Radhe Radhe']
  },
  {
    id: 'ram-navami',
    name: 'Ram Navami',
    month: 'APR',
    day: '17',
    dateStr: 'April 17, 2026',
    locations: ['Ayodhya', 'Bhadrachalam', 'Rameswaram'],
    significance: 'The auspicious appearance day of Maryada Purushottam Lord Rama.',
    rituals: ['Special Surya Abhishek of Ram Lalla', 'Recitation of Ramcharitmanas', 'Grand Rath Yatra procession']
  },
  {
    id: 'buddha-purnima',
    name: 'Buddha Purnima (Vesak)',
    month: 'MAY',
    day: '23',
    dateStr: 'May 23, 2026',
    locations: ['Bodh Gaya', 'Sarnath', 'Lumbini', 'Dharamshala'],
    significance: 'The threefold auspicious anniversary of Buddha’s birth, enlightenment, and parinirvana.',
    rituals: ['Silent circumambulation of Bodhi Tree', 'Watering the sacred tree with scented water', 'Peace lamps offering']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'senior-pilgrims-guide',
    title: '10 Essential Tips for Senior Pilgrims',
    summary: 'Expert guidance for a comfortable, stress-free, and spiritually fulfilling sacred journey for elderly family members.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBivQ3med5-I0wOkSTpEwzVCjr5ntp2Odj9IeI07GB_9L_mGC9jzvmcozCF0oCskH-ut6Iw0Nt3Vxm9OlFx5XEqmuMKf-s4NjlbvhnzPxdCOx4jKiUc-7pX7DLgAkrBdWEgJQVDGdarUxRzAvJbEqNnuER5Ue5PMs8tZbtJo7sz9WB5w_FKl6w81ZDywm0lSP1gBo8ptMc-1T1q6Z9Rkv8j-cISVvDzTXC3lUHmTzKKfLkogASLzZU',
    readTime: '4 min read',
    category: 'Accessibility & Care',
    content: [
      '1. Prioritize Senior-Friendly Darshan Passes: Major temples including Tirupati, Kashi Vishwanath, and Somnath provide priority gates for citizens aged 65+. Always book these special slots at least 2 weeks in advance.',
      '2. Stay within 500m of Temple Entry Portals: Walking lengthy distances through congested city lanes drains vital energy before entering the temple. Select verified accommodations with direct battery-rickshaw access.',
      '3. Plan Midday Rest Windows: Schedule temple visits strictly during early morning (6:30 AM - 9:00 AM) or peaceful late evenings, reserving 12:00 PM to 4:00 PM for rest and hydration.',
      '4. Footwear & Socks: Marble courtyards can become blistering hot in afternoons or cold in winter mornings. Carry thick white cotton socks which are permitted inside all sanctums.'
    ]
  },
  {
    id: 'ganga-aarti-significance',
    title: 'The Deep Significance of Ganga Aarti',
    summary: 'Understanding the ancient symbolism, Vedic mantras, and profound spiritual energy of the evening river ceremony.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxnszL7Ttvuw-mz_P8z3IDLXTfvmoTplKQbyU9PTf9z015QJ5SbIl1TD9F06s21u2r97NDGXj4gO3TcTfyHD3T0aWuIDdFDkCytnJuvYgEX68ghRe9GTnm495Cyi9jzN_FMnnoZlUxZHx0IkayqkiG4MgcylkHLQoB6D9_Uc6gStiexAbeq3PEyDdHMwsJZDaeCi696BDgmYpmoZMHD8hRaKMfIvw8lvQUu5YAVuTcMwvyJlT-Rfs',
    readTime: '3 min read',
    category: 'Vedic Traditions',
    content: [
      'The Ganga Aarti is not merely a visual spectacle; it is a profound expression of cosmic gratitude (Kritajnata) to the river that sustains life across northern India.',
      'The multi-tiered brass lamp represents the fire element (Agni), burning away impurities and offering light back to the supreme source.',
      'When the conch (Shankha) blows, the sound vibration is believed to clear negative energies and align the heart chakra with reverence and peace.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Ananya R.',
    location: 'Bengaluru',
    rating: 5,
    quote: '"The senior mode was a true blessing for my parents. The accommodations were close to the temples with zero steep stairs, and the battery car passes saved them hours of fatigue."',
    trip: 'Kashi & Ayodhya Senior Pilgrimage'
  },
  {
    id: '2',
    author: 'Vikram S.',
    location: 'Mumbai',
    rating: 5,
    quote: '"DharmaAI planned a seamless 5-day Char Dham trip. Highly recommend for the precise darshan timings, temple dress code reminders, and verified transport."',
    trip: 'Kedarnath & Badrinath Yatra'
  },
  {
    id: '3',
    author: 'Dr. Meenakshi Sundaram',
    location: 'Chennai',
    rating: 5,
    quote: '"The AI suggested itinerary synchronized our puja timings perfectly with temple priest schedules. It felt like having a knowledgeable family elder guiding us."',
    trip: 'Jyotirlinga Darshan Circuit'
  }
];
