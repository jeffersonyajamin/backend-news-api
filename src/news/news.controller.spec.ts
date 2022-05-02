import { Test, TestingModule } from '@nestjs/testing';
import { NewsResDTO } from 'src/shared/dto/news-res.dto';
import { NewsController } from './news.controller';
import { NewsModule } from './news.module';
import { NewsService } from './news.service';

describe('AppController', () => {
  let newsController: NewsController;
  let newsService: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NewsModule],
    }).compile();
    newsController = module.get<NewsController>(NewsController);
    newsService = module.get<NewsService>(NewsService);
  });

  describe('newsController', () => {
    it('should be defined', () => {
      expect(newsController).toBeDefined();
    });
    it('must return object and status its ok', async () => {
      const resp = await newsController.getNewsFilter({ search: 'bitcoin' });
      expect(typeof resp).toEqual('object');
      expect(resp.status).toBe('ok');
    });
  });

  describe('newsService', () => {
    it('should be defined', () => {
      expect(newsService).toBeDefined();
    });

    it('call one time function', async () => {
      const result = {
        status: 'ok',
        totalResults: 553,
        articles: [
          {
            source: {
              id: null,
              name: 'Lifehacker.com',
            },
            author: 'Khamosh Pathak',
            title:
              'The Fastest Ways to Convert Your iPhone HEIC Photos to JPG (So You Can Actually Use Them)',
            description:
              'HEIC is a solid format for Apple devices. It includes Live Photos, Apple’s post-processing, and it still manages to weigh way below what a JPG would. While it works fine if you’re sharing a photo among other Apple devices, you run into a problem when you need…',
            url: 'https://lifehacker.com/the-fastest-ways-to-convert-your-iphone-heic-photos-to-1848768694',
            urlToImage:
              'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/721db943decd9d7c6a3eb1c569106ae7.jpg',
            publishedAt: '2022-04-13T15:00:00Z',
            content:
              'HEIC is a solid format for Apple devices. It includes Live Photos, Apples post-processing, and it still manages to weigh way below what a JPG would. While it works fine if youre sharing a photo among… [+2667 chars]',
          },
          {
            source: {
              id: null,
              name: 'Lifehacker.com',
            },
            author: 'Jake Peterson',
            title: 'Every Store You Can Get 3% Cash Back With Your Apple Card',
            description:
              'I use Apple Pay for everything. It’s fast, secure, and best of all it gives me 2% cash back on my Apple Card. However, some stores don’t stop at 2% cash back—participating retailers offer 3%. So if you want to squeeze every cent of credit card rewards you can…',
            url: 'https://lifehacker.com/every-store-you-can-get-3-cash-back-with-your-apple-ca-1848818805',
            urlToImage:
              'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1a24c2356cb86542a938483ea357be6a.jpg',
            publishedAt: '2022-04-20T20:00:00Z',
            content:
              'I use Apple Pay for everything. Its fast, secure, and best of all it gives me 2% cash back on my Apple Card. However, some stores dont stop at 2% cash backparticipating retailers offer 3%. So if you … [+2783 chars]',
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Steve Dent',
            title:
              'Apple Studio Display issue leaves some owners unable to update their firmware',
            description:
              'Some owners of the new Apple Studio Display are having problems updating to the latest firmware, MacRumors has reported. After multiple failed attempts, users are being told by Apple support to bring their display in for repair to an Apple Store or authorized…',
            url: 'https://www.engadget.com/apple-studio-display-owners-report-problems-updating-to-the-latest-i-os-firmware-083554849.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-04/7f826020-b96c-11ec-969b-dec34340ff30',
            publishedAt: '2022-04-11T08:35:54Z',
            content:
              'Some owners of the new Apple Studio Display are having problems updating to the latest firmware, MacRumors has reported. After multiple failed attempts, users are being told by Apple support to bring… [+937 chars]',
          },
          {
            source: {
              id: 'wired',
              name: 'Wired',
            },
            author: 'Boone Ashworth',
            title: 'Meta’s Augmented Reality Glasses Are Still Years Away',
            description:
              'Plus: Apple faces MacBook delays, Peloton switches gears, and Sonos acquires another speaker company.',
            url: 'https://www.wired.com/story/meta-facebook-augmented-reality-glasses-years-away/',
            urlToImage:
              'https://media.wired.com/photos/625a070e6d56628e5cc96f54/191:100/w_1280,c_limit/Meta_Gear_GettyImages-1385540284.jpg',
            publishedAt: '2022-04-16T13:00:00Z',
            content:
              'Considering that all eyes have been on Elon Musk and his Twitter shenanigans this week, youd be forgiven for not paying much attention to Mark Zuckberg. Nevertheless, the Meta CEO has kept his Sauron… [+3777 chars]',
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Kris Holt',
            title:
              "Apple signs an exclusive deal with Tom Hanks' production company",
            description:
              "Apple\r\n is looking to build on the success of TV+ by locking in Tom Hanks'\r\n production company to an exclusive multi-year deal. The agreement with Playtone covers series, documentaries and unscripted projects.Hanks is also set to star in a sequel to World Wa…",
            url: 'https://www.engadget.com/apple-tv-plus-tom-hanks-playtone-deal-greyhound-163749926.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-04/da9c59e0-bb45-11ec-bbff-79ceba4e84f3',
            publishedAt: '2022-04-13T16:37:49Z',
            content:
              "Apple\r\n is looking to build on the success of TV+ by locking in Tom Hanks'\r\n production company to an exclusive multi-year deal. The agreement with Playtone covers series, documentaries and unscripte… [+1280 chars]",
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Cherlynn Low',
            title: 'Apple had a huge quarter, but revenue growth is slowing',
            description:
              'All eyes are on Apple today, after a tumultuous series of earnings reports dropped this week. Google parent company Alphabet missed revenue expectations, while Meta (formerly Facebook) recorded a higher profit than expected this quarter. Apple just released i…',
            url: 'https://www.engadget.com/apple-q2-2022-earnings-results-205943868.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-01/699c9a20-7fbd-11ec-bdff-caf58d8f9ff9',
            publishedAt: '2022-04-28T20:59:43Z',
            content:
              'All eyes are on Apple today, after a tumultuous series of earnings reports dropped this week. Google parent company Alphabet missed revenue expectations, while Meta (formerly Facebook) recorded a hig… [+1964 chars]',
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Jon Fingas',
            title: 'Apple begins manufacturing the iPhone 13 in India',
            description:
              "Apple has started manufacturing one of its latest phones in India. Reutersreports the tech firm has begun producing iPhone 13 units in the country. While Apple didn't say which factory was responsible, a Reuters source claimed a Foxconn plant in the Tamil Nad…",
            url: 'https://www.engadget.com/apple-iphone-13-india-manufacturing-131034955.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-04/ce07bc60-b992-11ec-bfe6-27d6c26b542c',
            publishedAt: '2022-04-11T13:04:55Z',
            content:
              "Apple has started manufacturing one of its latest phones in India. Reutersreports the tech firm has begun producing iPhone 13 units in the country. While Apple didn't say which factory was responsibl… [+1443 chars]",
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Jon Fingas',
            title: 'Apple Music now offers DJ mixes in spatial audio',
            description:
              "Apple Music's spatial audio is now available for those who'd rather spend their nights at the club than the concert hall. The service is now offering DJ mixes in Dolby Atmos that promise a more immersive dance music experience — not quite like sweating throug…",
            url: 'https://www.engadget.com/apple-music-dj-mixes-spatial-audio-150003676.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-04/7b9fec80-c014-11ec-9fdd-8fa95034e959',
            publishedAt: '2022-04-20T15:00:03Z',
            content:
              "Apple Music's spatial audio is now available for those who'd rather spend their nights at the club than the concert hall. The service is now offering DJ mixes in Dolby Atmos that promise a more immer… [+1162 chars]",
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Kris Holt',
            title:
              'Apple Watch Series 8 could include a body temperature sensor',
            description:
              "If Apple\r\n sticks to its usual calendar, we should get our first look at Apple Watch\r\n Series 8 in September. We'll likely see watchOS 9 for the first time at WWDC in June\r\n as well. Both events are months away, but the Watch update rumors are ramping up.Appl…",
            url: 'https://www.engadget.com/apple-watch-series-8-body-temperature-monitor-low-power-mode-watchos-9-151141297.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2021-10/18adc460-2b97-11ec-88fb-058d5a0b0624',
            publishedAt: '2022-04-12T15:11:41Z',
            content:
              "If Apple\r\n sticks to its usual calendar, we should get our first look at Apple Watch\r\n Series 8 in September. We'll likely see watchOS 9 for the first time at WWDC in June\r\n as well. Both events are … [+2086 chars]",
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Amrita Khalid',
            title:
              'Apple hired the same anti-union law firm as Starbucks: report',
            description:
              "Apple hired Littler Mendelson — an anti-union law firm known for high-profile clients such as Starbucks, McDonald’s and Nissan — reportedThe Verge. The decision to retain the firm comes shortly after 100 workers at Apple's retail location in Atlanta’s Cumberl…",
            url: 'https://www.engadget.com/apple-union-starbucks-cwa-cumberland-012024025.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-04/93f03f70-c4f5-11ec-9dd5-4170869b8efd',
            publishedAt: '2022-04-26T01:20:24Z',
            content:
              'Apple hired Littler Mendelson an anti-union law firm known for high-profile clients such as Starbucks, McDonalds and Nissan reportedThe Verge. The decision to retain the firm comes shortly after 100 … [+2474 chars]',
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Jon Fingas',
            title:
              'Apple promises free fixes for Watch Series 6 models with blank screens',
            description:
              "Don't worry if your Apple Watch screen suddenly went blank — you might not have to pay to get it fixed. 9to5Mac and The Verge note that Apple has launched a service program that offers free fixes for Watch Series 6 models whose screens go permanently white. I…",
            url: 'https://www.engadget.com/apple-watch-series-6-blank-screen-free-repair-154136730.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2021-08/513bd700-081e-11ec-8dfa-e1984d897242',
            publishedAt: '2022-04-27T15:41:36Z',
            content:
              "Don't worry if your Apple Watch screen suddenly went blank you might not have to pay to get it fixed. 9to5Mac and The Verge note that Apple has launched a service program that offers free fixes for W… [+843 chars]",
          },
          {
            source: {
              id: null,
              name: 'Lifehacker.com',
            },
            author: 'Jake Peterson',
            title:
              'You Can Finally Fix Your Own Apple Devices (With Apple’s Help)',
            description:
              'If your iPhone’s display breaks, or the battery goes bust, your first instinct might be to make an appointment at Apple’s Genius Bar. For the longest time, that’s exactly the way Apple wanted it. Times have changed, however: People want to repair their own de…',
            url: 'https://lifehacker.com/you-can-finally-fix-your-own-apple-devices-with-apple-1848847963',
            urlToImage:
              'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fd5a27f5802905d72abd95fa0a9b8283.jpg',
            publishedAt: '2022-04-27T17:00:00Z',
            content:
              'If your iPhones display breaks, or the battery goes bust, your first instinct might be to make an appointment at Apples Genius Bar. For the longest time, thats exactly the way Apple wanted it. Times … [+5219 chars]',
          },
          {
            source: {
              id: 'the-verge',
              name: 'The Verge',
            },
            author: 'Justine Calma',
            title:
              'Apple successfully pushes suppliers to use more renewable energy',
            description:
              'Many of Apple’s suppliers have boosted their renewable energy use. Apple needs to clean up its supply chain to shrink its carbon footprint and meet its climate goals.',
            url: 'https://www.theverge.com/2022/4/14/23025064/apple-supply-chain-pollution-renewable-energy-climate-goals',
            urlToImage:
              'https://cdn.vox-cdn.com/thumbor/g1ieWe6hcrUhbNVi73pOY35mZWo=/0x392:4768x2888/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23389677/539620514.jpg',
            publishedAt: '2022-04-14T16:59:08Z',
            content:
              'A majority of Apples greenhouse gas emissions come from its supply chain\r\nSunPower Station in Hongyuan county, Sichuan province, southwest China on 24th June 2015. Sunpower stations at Hongyuan and Z… [+3036 chars]',
          },
          {
            source: {
              id: 'the-verge',
              name: 'The Verge',
            },
            author: 'Nilay Patel',
            title:
              'Government surveillance, Elon Musk, and free speech, with EFF executive director Cindy Cohn',
            description:
              'On the frontier of fighting the NSA, combatting censorship, and holding platforms like Apple, Meta, and Google accountable. Plus, the Elon Musk and Twitter saga.',
            url: 'https://www.theverge.com/23041249/elon-musk-free-speech-decoder-interview-podcast-cindy-cohn',
            urlToImage:
              'https://cdn.vox-cdn.com/thumbor/mMduL7-qCbHxPGI1VVPkDLuS7Bc=/0x148:2050x1221/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23415131/VRG_ILLO_Decoder_Cindy_Cohn.jpg',
            publishedAt: '2022-04-26T14:15:00Z',
            content:
              'Photo Illustration by Grayson Blackmon / The Verge\r\n\n \n\n\n On the frontier of fighting the NSA Cindy Cohn is the executive director of the Electronic Frontier Foundation, or EFF. If you’re an internet… [+43790 chars]',
          },
          {
            source: {
              id: 'wired',
              name: 'Wired',
            },
            author: 'Brenda Stolyar',
            title: 'The Apple Watch Series 7 Is At Its Lowest Price Ever',
            description:
              'The latest smartwatch from Cupertino currently has a less daunting price tag.',
            url: 'https://www.wired.com/story/apple-watch-deal-april-2022/',
            urlToImage:
              'https://media.wired.com/photos/617b269f61ff71e763a1cb4f/191:100/w_1280,c_limit/Gear-Apple-Watch-Series-7-Review-top.jpg',
            publishedAt: '2022-04-04T18:33:43Z',
            content:
              "Tired of tracking your workouts with your iPhone but don't want to drop a ton of cash on a shiny, new smartwatch? Well, you're in luck. The Apple Watch Series 7 (8/10, WIRED Recommends) is on sale fo… [+1726 chars]",
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Mariella Moon',
            title:
              'Apple extends update deadline for outdated apps in danger of being deleted',
            description:
              "Apple recently sent notices to some indie developers, warning them that their app will be pulled from the App Store if it's not updated within 30 days. The tech giant has had a policy in place against outdated and abandoned applications since 2016, but the mo…",
            url: 'https://www.engadget.com/apple-extends-outdated-apps-update-deadline-093652497.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-images/2020-02/105af610-4d5f-11ea-bfe4-9006810bd548',
            publishedAt: '2022-04-30T09:36:52Z',
            content:
              "Apple recently sent notices to some indie developers, warning them that their app will be pulled from the App Store if it's not updated within 30 days. The tech giant has had a policy in place agains… [+1534 chars]",
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Steve Dent',
            title:
              'Apple Watch Series 7 models fall to new all-time lows in one-day Amazon sale',
            description:
              "If you've been eyeing the latest Apple Watch Series 7 but are waiting for a deal, it may be time to act. No less than four models, including the 41mm and 45mm models with and without cellular, are on sale at Amazon at all-time low prices. Each model (in multi…",
            url: 'https://www.engadget.com/apple-watch-series-7-models-fall-to-new-all-time-lows-at-amazon-for-today-only-083221206.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-04/b030ba80-b3ec-11ec-bbef-6937241f649e',
            publishedAt: '2022-04-04T08:32:21Z',
            content:
              "If you've been eyeing the latest Apple Watch Series 7 but are waiting for a deal, it may be time to act. No less than four models, including the 41mm and 45mm models with and without cellular, are on… [+1510 chars]",
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Cherlynn Low',
            title:
              'Engadget Podcast: We love the Playdate and BTS dance lessons on Apple Fitness+',
            description:
              'This week, Cherlynn is joined by guest co-host Jessica Conditt to take a closer look at the Playdate — the cute little gaming console with a crank. The two go on to rave about Samsung’s new Pokémon-themed Galaxy Z Flip 3 and Apple’s BTS dance lessons on Fitne…',
            url: 'https://www.engadget.com/engadget-podcast-playdate-review-bts-dance-workouts-apple-fitness-123022038.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb',
            publishedAt: '2022-04-22T12:30:22Z',
            content:
              'This week, Cherlynn is joined by guest co-host Jessica Conditt to take a closer look at the Playdate the cute little gaming console with a crank. The two go on to rave about Samsungs new Pokémon-them… [+1240 chars]',
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Igor Bonifacic',
            title:
              'Apple may have begun a new push to remove outdated software from the App Store',
            description:
              'Apple may have begun more rigorously enforcing its policy against unused and dysfunctional apps. Back in 2016\r\n, the company vowed it would go out of its way to remove applications that had stopped working, not kept up with its latest guidelines or become out…',
            url: 'https://www.engadget.com/apple-app-store-improvement-policy-210207155.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-03/b4b8d1d0-ab74-11ec-94f5-eaec4099ae17',
            publishedAt: '2022-04-24T21:02:07Z',
            content:
              'Apple may have begun more rigorously enforcing its policy against unused and dysfunctional apps. Back in 2016\r\n, the company vowed it would go out of its way to remove applications that had stopped w… [+2341 chars]',
          },
          {
            source: {
              id: 'engadget',
              name: 'Engadget',
            },
            author: 'Steve Dent',
            title:
              'Apple Watch Series 7 falls to a new all-time low of $314 at Amazon',
            description:
              'Apple Watch Series 7 models are still on sale at Amazon starting at $330, but one model in particular just fell even further. The 41mm GPS model with a green aluminum case and green "Clover Sport" band has now dropped to $314 or $85 off, marking a new low pri…',
            url: 'https://www.engadget.com/apple-watch-series-7-falls-to-a-new-all-time-low-of-314-at-amazon-092612107.html',
            urlToImage:
              'https://s.yimg.com/os/creatr-uploaded-images/2022-04/57dcc0c0-b975-11ec-affe-06cf0ab3e8f2',
            publishedAt: '2022-04-11T09:26:12Z',
            content:
              'Apple Watch Series 7 models are still on sale at Amazon starting at $330, but one model in particular just fell even further. The 41mm GPS model with a green aluminum case and green "Clover Sport" ba… [+1311 chars]',
          },
        ],
      };
      jest
        .spyOn(newsService, 'findNews')
        .mockImplementation(() =>
          Promise.resolve(result as unknown as Promise<NewsResDTO>),
        );
      await newsController.getNewsFilter({ search: 'apple' });
      expect(newsService.findNews).toHaveBeenCalledTimes(1);
    });
  });
});
