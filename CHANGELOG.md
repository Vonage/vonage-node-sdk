#  (2025-01-10)


### Bug Fixes

* Add missing advanced machine detection mode ([#947](https://github.com/vonage/vonage-node-sdk/issues/947)) ([f2cc9c1](https://github.com/vonage/vonage-node-sdk/commit/f2cc9c128132bdc3276092428bdaf6d08ec6456e))
* create conversation was sending the request incorrectly ([#967](https://github.com/vonage/vonage-node-sdk/issues/967)) ([4b81d74](https://github.com/vonage/vonage-node-sdk/commit/4b81d74f389556e2f570463eb5fc9b665615b3aa))
* incorrect http method for updating users ([#953](https://github.com/vonage/vonage-node-sdk/issues/953)) ([9f52bc5](https://github.com/vonage/vonage-node-sdk/commit/9f52bc51a033e397fc5cd70c734678befd823a41))
* incorrect http method for updating users ([#954](https://github.com/vonage/vonage-node-sdk/issues/954)) ([bacbe72](https://github.com/vonage/vonage-node-sdk/commit/bacbe72b3ebd6a87bbddd02d73d1918672d01bc6))
* messages now using basic auth when requested ([ac1f603](https://github.com/vonage/vonage-node-sdk/commit/ac1f603a292ad89432913fad2ceacd49192b4868))
* send form request sending undefined form body ([#966](https://github.com/vonage/vonage-node-sdk/issues/966)) ([78b6199](https://github.com/vonage/vonage-node-sdk/commit/78b61993e8f350aefcc78ea333182ca8f9bea1c3))
* server-client no longer sends undefined query parameters ([7d7fc08](https://github.com/vonage/vonage-node-sdk/commit/7d7fc086816eaad2acb2f2787ebbeb1419229eb7))
* **subaccounts:** correct incorrect type on `BalanceTransferParameters` ([#937](https://github.com/vonage/vonage-node-sdk/issues/937)) ([70f9c25](https://github.com/vonage/vonage-node-sdk/commit/70f9c256f0c7dbc0efda960b9cec7846cfa84072))
* **subaccounts:** correct type on SubAccountCreateParameters ([#940](https://github.com/vonage/vonage-node-sdk/issues/940)) ([f7e7531](https://github.com/vonage/vonage-node-sdk/commit/f7e7531270015d87a7f041f147ef42d3703521b7))
* user-to-user header was not being transformed to lisp case ([#976](https://github.com/vonage/vonage-node-sdk/issues/976)) ([f83aaf0](https://github.com/vonage/vonage-node-sdk/commit/f83aaf08559fb25247f9b8f7512809e2ba90f600))
* **video:** Corrected video transition guide install instructions ([68d3c3b](https://github.com/vonage/vonage-node-sdk/commit/68d3c3b4f3056127ccc8800914ce86e04a0094b5))
* **video:** Updated list of supported video APIs in transition guide ([f98252f](https://github.com/vonage/vonage-node-sdk/commit/f98252ff8975371ee22b7a6406576d9ca65a8abd))


### Features

* added max bitrate for archive ([#972](https://github.com/vonage/vonage-node-sdk/issues/972)) ([837dda8](https://github.com/vonage/vonage-node-sdk/commit/837dda8096484c1f457b17593d4c76ea03509992))
* added new DTMF endpoints ([#977](https://github.com/vonage/vonage-node-sdk/issues/977)) ([40cfa57](https://github.com/vonage/vonage-node-sdk/commit/40cfa577c1669eeaf53fec439337cc1aa7611572))
* added RCS channel and changes to other channels  ([#941](https://github.com/vonage/vonage-node-sdk/issues/941)) ([4342a92](https://github.com/vonage/vonage-node-sdk/commit/4342a924664c6d27c1cacb0158dc9ee3e0bfdc50))
* added templates to verify ([#962](https://github.com/vonage/vonage-node-sdk/issues/962)) ([98a1731](https://github.com/vonage/vonage-node-sdk/commit/98a1731af0bc9229d6c11d75acb48ed8e70cd487))
* added update to messages ([#960](https://github.com/vonage/vonage-node-sdk/issues/960)) ([c37f7a7](https://github.com/vonage/vonage-node-sdk/commit/c37f7a796a5225d299666e18564cf5292c1de7bc))
* added user-to-user headers for sip endpoint ([#965](https://github.com/vonage/vonage-node-sdk/issues/965)) ([6735024](https://github.com/vonage/vonage-node-sdk/commit/673502475e30b13dc49e39e34612ae01d47a4e9d))
* added whats app reaction ([#964](https://github.com/vonage/vonage-node-sdk/issues/964)) ([db2946f](https://github.com/vonage/vonage-node-sdk/commit/db2946f79b07e713698361496bc7d9f4326ffec2))
* **network:** added sim swap and network client ([#939](https://github.com/vonage/vonage-node-sdk/issues/939)) ([13438d6](https://github.com/vonage/vonage-node-sdk/commit/13438d6c1a9f78c2785d3b492093e1f8fb33948b))
* removed proactive-connect ([#959](https://github.com/vonage/vonage-node-sdk/issues/959)) ([4aaa381](https://github.com/vonage/vonage-node-sdk/commit/4aaa381dce2e29177837e683d2559bb4a7c2a9a2))



# [4.0.0](https://github.com/vonage/vonage-node-sdk/compare/3.10.1...4.0.0) (2024-05-24)


### Bug Fixes

* added missing type declration for node fetch ([f927b8e](https://github.com/vonage/vonage-node-sdk/commit/f927b8e3901cbf0605f36aaa022d2634d298e0d0))
* adding rs256 as allowed algrothim ([#914](https://github.com/vonage/vonage-node-sdk/issues/914)) ([4e3bd8a](https://github.com/vonage/vonage-node-sdk/commit/4e3bd8ab2c9ab964f4802f9edd8a8a5e14ea1ccc))
* **auth:** fixed passing in private key path ([#920](https://github.com/vonage/vonage-node-sdk/issues/920)) ([0dbb5d2](https://github.com/vonage/vonage-node-sdk/commit/0dbb5d2f7311aee9909671e046e679cee61371d1))
* decoding when charset is in the content type response header ([#904](https://github.com/vonage/vonage-node-sdk/issues/904)) ([aec47d6](https://github.com/vonage/vonage-node-sdk/commit/aec47d68e73e2407a2f8a0e0a8a8c54ee6ad824a))
* **number-insights-v2:** incorrect auth method ([#909](https://github.com/vonage/vonage-node-sdk/issues/909)) ([8fd3dcc](https://github.com/vonage/vonage-node-sdk/commit/8fd3dcc2abd6f4ad172f8642b6f48485737ecd68))
* outdated/wrong algorithm argument passed to jsonwebtoken ([#907](https://github.com/vonage/vonage-node-sdk/issues/907)) ([d5adb68](https://github.com/vonage/vonage-node-sdk/commit/d5adb689ba2f1d7a29ef648e4b00970f61f2687d))
* **sms:** correct wrong status code for "partner account barred" ([#895](https://github.com/vonage/vonage-node-sdk/issues/895)) ([20ed3f2](https://github.com/vonage/vonage-node-sdk/commit/20ed3f2ab2f1b619246b18054b4804f6065d57c4))
* **verify2:** sms and silent auth updates ([#908](https://github.com/vonage/vonage-node-sdk/issues/908)) ([935a20c](https://github.com/vonage/vonage-node-sdk/commit/935a20c920a67d30a127ca772f154dcfea2adacb))
* **video:** Make sure create session returned JSON, and fixed return type ([#913](https://github.com/vonage/vonage-node-sdk/issues/913)) ([28ac0df](https://github.com/vonage/vonage-node-sdk/commit/28ac0df759e1be535fefe70af48041445c9cfd04))
* **video:** updated endpoints for adding/removing streams from Archive ([#922](https://github.com/vonage/vonage-node-sdk/issues/922)) ([9652cac](https://github.com/vonage/vonage-node-sdk/commit/9652cacb0afa38118473db0d277d56bf5f427904))
* **voice:** ncco encoding ([#906](https://github.com/vonage/vonage-node-sdk/issues/906)) ([9f2cfc8](https://github.com/vonage/vonage-node-sdk/commit/9f2cfc895c53378ec736bef5f36b225c23ebd659))


### Features

* add tss languages generate file from voice.json ([#926](https://github.com/vonage/vonage-node-sdk/issues/926)) ([a34e4dc](https://github.com/vonage/vonage-node-sdk/commit/a34e4dca15216a627fdf91dd9e9005a5840dac58))
* **conversations:** added conversations package ([#905](https://github.com/vonage/vonage-node-sdk/issues/905)) ([e28f6b6](https://github.com/vonage/vonage-node-sdk/commit/e28f6b6ac0a410c6046adb66e040634cf1b70fa9))
* **messages:** added new webhook, viber, and sms parameters ([#921](https://github.com/vonage/vonage-node-sdk/issues/921)) ([691a796](https://github.com/vonage/vonage-node-sdk/commit/691a79628cddd38bdcb0953e0453a414575c6ca6))



## [3.10.1](https://github.com/vonage/vonage-node-sdk/compare/v3.0.0-beta.4...3.10.1) (2023-11-12)


### Bug Fixes

*  explicit_approval typeo in join type ([#870](https://github.com/vonage/vonage-node-sdk/issues/870)) ([66ea103](https://github.com/vonage/vonage-node-sdk/commit/66ea10344bce0791bc0154330800563b81dc6ea1))
* Added dist folder to depcheck ignores ([0b3e533](https://github.com/vonage/vonage-node-sdk/commit/0b3e533ca6983757f4762666dfe2d485fd50d0e3))
* Allow features to be searched in available numbers ([#731](https://github.com/vonage/vonage-node-sdk/issues/731)) ([5b4b201](https://github.com/vonage/vonage-node-sdk/commit/5b4b201a1d16c2189880aa70b2770eca6245892f))
* allow no filter when getting owned numbers, require filter when searching available numbers ([#747](https://github.com/vonage/vonage-node-sdk/issues/747)) ([ac80247](https://github.com/vonage/vonage-node-sdk/commit/ac80247b3fad2fb162df39d331c609d8c96c3435))
* **applications:** updating types for application package ([#827](https://github.com/vonage/vonage-node-sdk/issues/827)) ([2ff4e5a](https://github.com/vonage/vonage-node-sdk/commit/2ff4e5ae479af5cece0d65cb9aa415eb1186a1ef))
* **build:** GHA install typescript and update NPM before running build commands ([#737](https://github.com/vonage/vonage-node-sdk/issues/737)) ([504be6a](https://github.com/vonage/vonage-node-sdk/commit/504be6a5d5a0494d885223131f3e29451444c570))
* Correct our return types when sending SMS ([#743](https://github.com/vonage/vonage-node-sdk/issues/743)) ([7d9fc80](https://github.com/vonage/vonage-node-sdk/commit/7d9fc806f16d4795b640e99e3d38fdb203b29b3f))
* Exported additional NCCO classes and interfaces that weren't before ([#732](https://github.com/vonage/vonage-node-sdk/issues/732)) ([a36ef9c](https://github.com/vonage/vonage-node-sdk/commit/a36ef9c515d0552a554f51a4b66d122ab6a625d2))
* Fixed issue with WA Template interface from older, incorrect spec ([#730](https://github.com/vonage/vonage-node-sdk/issues/730)) ([52de295](https://github.com/vonage/vonage-node-sdk/commit/52de295038ff7b73facf7f7a0599ddcf60a0cb29))
* **jwt:** Fix ttl in claims ([#846](https://github.com/vonage/vonage-node-sdk/issues/846)) ([54fccdc](https://github.com/vonage/vonage-node-sdk/commit/54fccdce4ca56b15ba2f594cc35ed044f14f2d0b))
* kebabecase api parameters ([#802](https://github.com/vonage/vonage-node-sdk/issues/802)) ([c71d424](https://github.com/vonage/vonage-node-sdk/commit/c71d4249595b6800a944c9f59b2dcf1f5d960080))
* **messages:** Fixed README example ([82570dd](https://github.com/vonage/vonage-node-sdk/commit/82570ddac83f23c8c11a64fbe68224465e114271))
* missing depedency for proactive connect ([2ac48d3](https://github.com/vonage/vonage-node-sdk/commit/2ac48d370300715d85c384192b2b1a422301cd3e))
* number paramters casing ([#848](https://github.com/vonage/vonage-node-sdk/issues/848)) ([73b4a68](https://github.com/vonage/vonage-node-sdk/commit/73b4a68d57df2657b393473784d4e3b58dba07a1))
* Numbers API was making JSON requests instead of form encoded requests ([#734](https://github.com/vonage/vonage-node-sdk/issues/734)) ([9c8e13d](https://github.com/vonage/vonage-node-sdk/commit/9c8e13d7d4b0b0377f2848e7a9097d8bbef9a6bd))
* removed importHelpers compiler options ([#786](https://github.com/vonage/vonage-node-sdk/issues/786)) ([f07eff9](https://github.com/vonage/vonage-node-sdk/commit/f07eff9359f31c3351b8a9684d17959474a5ff0e))
* restored append to user agent ([#852](https://github.com/vonage/vonage-node-sdk/issues/852)) ([dcab7ab](https://github.com/vonage/vonage-node-sdk/commit/dcab7ab10dee7e18315d7a4e13a87ab960926cc9))
* Reverts back to ES6 and CommonJS for better Node compatibility ([#777](https://github.com/vonage/vonage-node-sdk/issues/777)) ([15503f9](https://github.com/vonage/vonage-node-sdk/commit/15503f9fcf7e1b04961e9d96623f9b4b74bd9e77))
* server-client not setting timeout parameter ([b9efd8f](https://github.com/vonage/vonage-node-sdk/commit/b9efd8ffba069744b8804eeb55d23ccc898da78f))
* **server-client:** Removing module declaration ([d3930fc](https://github.com/vonage/vonage-node-sdk/commit/d3930fc2db9fa5997f7a68d93fd64cd68bfed447))
* **server-sdk:** Fix links and SMS example ([2dec8f9](https://github.com/vonage/vonage-node-sdk/commit/2dec8f93d9a83fdae8ed016615a7851c60dec391))
* Set the proper content type when we send put/patch/post ([#738](https://github.com/vonage/vonage-node-sdk/issues/738)) ([02c303f](https://github.com/vonage/vonage-node-sdk/commit/02c303f36161933e5d6daa179d649e3272ff8e65))
* timeout parameter being respected ([#850](https://github.com/vonage/vonage-node-sdk/issues/850)) ([52fae4a](https://github.com/vonage/vonage-node-sdk/commit/52fae4a47c07e41493ed0afa700405af90ec2d87))
* type for websocket header ([#851](https://github.com/vonage/vonage-node-sdk/issues/851)) ([8dd49dd](https://github.com/vonage/vonage-node-sdk/commit/8dd49dde2f56c960a22f6d65f09eb607e50dd84a))
* types using node:http for import ([#741](https://github.com/vonage/vonage-node-sdk/issues/741)) ([e8e5dd6](https://github.com/vonage/vonage-node-sdk/commit/e8e5dd6374d88da5446c045b4c789a9887cb0e95))
* **types:** verify response types ([#794](https://github.com/vonage/vonage-node-sdk/issues/794)) ([888111d](https://github.com/vonage/vonage-node-sdk/commit/888111dcc11449eba681430302e908029a818513))
* update packages after audit ([#844](https://github.com/vonage/vonage-node-sdk/issues/844)) ([8760b0f](https://github.com/vonage/vonage-node-sdk/commit/8760b0ffbf0efe50ee81e3be99b08009d48a18e8))
* Verify - Added brand to seperate out from Sender ID ([#744](https://github.com/vonage/vonage-node-sdk/issues/744)) ([01bfdec](https://github.com/vonage/vonage-node-sdk/commit/01bfdecdfd5c8a7da7efb97686e6fa852f9c4cc1))
* **verify2:** check code not returning status ([#823](https://github.com/vonage/vonage-node-sdk/issues/823)) ([3e04e19](https://github.com/vonage/vonage-node-sdk/commit/3e04e1957588046815b018b5eb259e8335acf6ed))
* **verify2:** missing "t" in the silent auth channel enum ([#834](https://github.com/vonage/vonage-node-sdk/issues/834)) ([565bcdd](https://github.com/vonage/vonage-node-sdk/commit/565bcdd65a794e9d421daacc13d7824512492d15))
* **verify2:** package json had incorrect main entry ([#830](https://github.com/vonage/vonage-node-sdk/issues/830)) ([9b48fb7](https://github.com/vonage/vonage-node-sdk/commit/9b48fb789ba6ca40763135f92ae331cf4b448763))
* **verify:** Added missing remapping for params ([#782](https://github.com/vonage/vonage-node-sdk/issues/782)) ([7fb20f2](https://github.com/vonage/vonage-node-sdk/commit/7fb20f209a48a7da373313410d480aca6b795f99))
* **verify:** import using lib folder ([#803](https://github.com/vonage/vonage-node-sdk/issues/803)) ([5530793](https://github.com/vonage/vonage-node-sdk/commit/5530793f7eec456220288ee9c7d16f41fabeb320))
* **video:** Added SIP and DTMF playing ([#776](https://github.com/vonage/vonage-node-sdk/issues/776)) ([727027e](https://github.com/vonage/vonage-node-sdk/commit/727027e90d6d80723cb7cf6e8f34425bf89ee419))
* **video:** Fix blank values on Dial API ([#828](https://github.com/vonage/vonage-node-sdk/issues/828)) ([14ec31f](https://github.com/vonage/vonage-node-sdk/commit/14ec31f25ac68e078f259c90ac0b733034d2665b))
* **voice:** Fixed response types on file downloads ([#864](https://github.com/vonage/vonage-node-sdk/issues/864)) ([0446638](https://github.com/vonage/vonage-node-sdk/commit/0446638b51b8a5f701557bcdd85ba4e527da35bc))
* **voice:** Force NCCO actions to set value for NCCO type to avoid JS problems ([#853](https://github.com/vonage/vonage-node-sdk/issues/853)) ([6bce17b](https://github.com/vonage/vonage-node-sdk/commit/6bce17b58bdc10d6a696514433c82178d630d39c))


### Features

* add experience composer and captions to video ([#809](https://github.com/vonage/vonage-node-sdk/issues/809)) ([f10f9e4](https://github.com/vonage/vonage-node-sdk/commit/f10f9e48204b086bd8af7599088bc95d1765a0ba))
* added verifySignature to jwt package ([#860](https://github.com/vonage/vonage-node-sdk/issues/860)) ([7c75951](https://github.com/vonage/vonage-node-sdk/commit/7c759510cb293053b26d3ffa729441875305bb1e))
* adding debug logging ([#795](https://github.com/vonage/vonage-node-sdk/issues/795)) ([0e82009](https://github.com/vonage/vonage-node-sdk/commit/0e82009aa9a4375cb5bb63529e5b33f090bbd109))
* audit package ([#787](https://github.com/vonage/vonage-node-sdk/issues/787)) ([882f800](https://github.com/vonage/vonage-node-sdk/commit/882f8006aa420e4904d117109d9b011c26c03b9d))
* auth signature timestamp ([#810](https://github.com/vonage/vonage-node-sdk/issues/810)) ([254386f](https://github.com/vonage/vonage-node-sdk/commit/254386fd1eb7b125cd90820d9abcf45000253802))
* **auth,messages,server-client:** Made auth handlers async ([#801](https://github.com/vonage/vonage-node-sdk/issues/801)) ([0fa9d7f](https://github.com/vonage/vonage-node-sdk/commit/0fa9d7fb0598fbe25d5ba818f8ccf288cb7b3fc2))
* bring your own passcode ([#816](https://github.com/vonage/vonage-node-sdk/issues/816)) ([e3f9ecb](https://github.com/vonage/vonage-node-sdk/commit/e3f9ecbaf5ac037a035f68644bf9c6aa87a474d7))
* file download ([#858](https://github.com/vonage/vonage-node-sdk/issues/858)) ([67ec0e8](https://github.com/vonage/vonage-node-sdk/commit/67ec0e8602b70f016be635c71ca9e06212af7d4e))
* **media:** support for the media api ([#857](https://github.com/vonage/vonage-node-sdk/issues/857)) ([5ca15c8](https://github.com/vonage/vonage-node-sdk/commit/5ca15c8afde0f61d50dc5b2d7721a4f8d868b2c7))
* meetings package ([#788](https://github.com/vonage/vonage-node-sdk/issues/788)) ([de69d5a](https://github.com/vonage/vonage-node-sdk/commit/de69d5a730cbf1277e132fb1780fbc4505bb80de))
* **number-insight-v2:** added support for number insight v2 ([#868](https://github.com/vonage/vonage-node-sdk/issues/868)) ([3e6a4dc](https://github.com/vonage/vonage-node-sdk/commit/3e6a4dce9cba81946192e93881b069b956519b5d))
* numbers simple search ([#779](https://github.com/vonage/vonage-node-sdk/issues/779)) ([62d9c93](https://github.com/vonage/vonage-node-sdk/commit/62d9c93cbbfc39afc927aea347d198136a64c330))
* proactive connect ([#818](https://github.com/vonage/vonage-node-sdk/issues/818)) ([a00efc4](https://github.com/vonage/vonage-node-sdk/commit/a00efc4d01ec95ee901395f25a252c50e24169f1))
* redact module ([#798](https://github.com/vonage/vonage-node-sdk/issues/798)) ([35868e7](https://github.com/vonage/vonage-node-sdk/commit/35868e7fe7ffcd648f5b2a306dd79f7d6ee463cd))
* **sub accounts:** adding sub accounts package ([#836](https://github.com/vonage/vonage-node-sdk/issues/836)) ([89fb37a](https://github.com/vonage/vonage-node-sdk/commit/89fb37af6b7a077089fb640e67db208d94002227))
* updating messages to be non breaking ([#813](https://github.com/vonage/vonage-node-sdk/issues/813)) ([555ea86](https://github.com/vonage/vonage-node-sdk/commit/555ea86696971993f175b05cf0de05ef5670ec5d))
* users package ([#845](https://github.com/vonage/vonage-node-sdk/issues/845)) ([4f623b5](https://github.com/vonage/vonage-node-sdk/commit/4f623b5751f921703f0e54f7c48930afd95947d5))
* **verify 2:** added missing fraud check parameter ([#826](https://github.com/vonage/vonage-node-sdk/issues/826)) ([c93bc3d](https://github.com/vonage/vonage-node-sdk/commit/c93bc3de5a2e6b041be427e6ba3678bad652f860))
* verify v2 ([#805](https://github.com/vonage/vonage-node-sdk/issues/805)) ([08d50bd](https://github.com/vonage/vonage-node-sdk/commit/08d50bd800db61c20f467ef414c970fb5ce12b24))
* **verify2:** adding cancel method ([#824](https://github.com/vonage/vonage-node-sdk/issues/824)) ([365d4b8](https://github.com/vonage/vonage-node-sdk/commit/365d4b8037b69c77b8995f18c9be691e0d9aee62))
* video client acl ([#814](https://github.com/vonage/vonage-node-sdk/issues/814)) ([342d903](https://github.com/vonage/vonage-node-sdk/commit/342d9036854ea58d7d016995874a92a86e1093a2))
* **video:** Added audio connector ([#791](https://github.com/vonage/vonage-node-sdk/issues/791)) ([daa72f6](https://github.com/vonage/vonage-node-sdk/commit/daa72f64fb680dba09b0abf765864666cbe70a8c))
* **voice:** adding advanced machine detection ([#835](https://github.com/vonage/vonage-node-sdk/issues/835)) ([1739320](https://github.com/vonage/vonage-node-sdk/commit/1739320fed511b6de52f7d4592be23d7120bdb6a))



# [3.0.0-beta.4](https://github.com/vonage/vonage-node-sdk/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2022-03-10)


### Bug Fixes

* add top level package-lock ([a845782](https://github.com/vonage/vonage-node-sdk/commit/a8457820bbe377e57503e39fa2701be7eb22cc33))
* **auth:** add signed requests and req updates ([887a776](https://github.com/vonage/vonage-node-sdk/commit/887a776a1c4c4c45f4a4251bcff0c4e770471a03))


### Features

* **numbers:** Add Numbers module code ([a78e9f0](https://github.com/vonage/vonage-node-sdk/commit/a78e9f092a74177e9ecc75693517108faa5ee76d))
* **numbers:** add numbers module) ([82805e4](https://github.com/vonage/vonage-node-sdk/commit/82805e46cb0b2e2c9b93e74c21db62dccdbde595))
* **sms:** add sms module ([4479d03](https://github.com/vonage/vonage-node-sdk/commit/4479d0370bd670ab86daa11fe8dce867a99a6a54))



# [3.0.0-beta.3](https://github.com/vonage/vonage-node-sdk/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-08-13)



# [3.0.0-beta.2](https://github.com/vonage/vonage-node-sdk/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-08-13)



# [3.0.0-beta.1](https://github.com/vonage/vonage-node-sdk/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2021-08-11)



# [3.0.0-beta.0](https://github.com/vonage/vonage-node-sdk/compare/v3.0.1-beta.0...v3.0.0-beta.0) (2021-08-10)



## [3.0.1-beta.0](https://github.com/vonage/vonage-node-sdk/compare/v2.10.2...v3.0.1-beta.0) (2021-08-10)



## [2.10.2](https://github.com/vonage/vonage-node-sdk/compare/v2.10.1...v2.10.2) (2020-10-05)



## [2.10.1](https://github.com/vonage/vonage-node-sdk/compare/v2.10.0...v2.10.1) (2020-09-10)



## [2.9.1](https://github.com/vonage/vonage-node-sdk/compare/v2.9.0...v2.9.1) (2020-08-17)



# [2.8.0](https://github.com/vonage/vonage-node-sdk/compare/v2.7.0...v2.8.0) (2020-06-26)



## [2.4.2](https://github.com/vonage/vonage-node-sdk/compare/v2.4.0...v2.4.2) (2019-09-07)



# [2.4.0](https://github.com/vonage/vonage-node-sdk/compare/v2.2.1...v2.4.0) (2018-09-27)



## [2.2.1](https://github.com/vonage/vonage-node-sdk/compare/v2.2.0...v2.2.1) (2018-04-29)



# [2.2.0](https://github.com/vonage/vonage-node-sdk/compare/v2.1.2...v2.2.0) (2018-01-24)



## [2.1.2](https://github.com/vonage/vonage-node-sdk/compare/v2.1.1...v2.1.2) (2018-01-11)



## [2.1.1](https://github.com/vonage/vonage-node-sdk/compare/v2.0.2...v2.1.1) (2017-12-14)



## [2.0.2](https://github.com/vonage/vonage-node-sdk/compare/v2.0.1...v2.0.2) (2017-03-22)



## [2.0.1](https://github.com/vonage/vonage-node-sdk/compare/v2.0.0...v2.0.1) (2017-03-21)



# [2.0.0](https://github.com/vonage/vonage-node-sdk/compare/v1.2.0...v2.0.0) (2017-03-20)



