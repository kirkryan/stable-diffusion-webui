"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[297],{5133:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/10/20/1.Textual inversion usage competitio","metadata":{"permalink":"/sygil-webui/blog/2022/10/20/1.Textual inversion usage competitio","editUrl":"https://github.com/Sygil-Dev/sygil-webui/tree/main/blog/2022-10-20/1.Textual inversion usage competitio.md","source":"@site/blog/2022-10-20/1.Textual inversion usage competitio.md","title":"Textual inversion usage competition","description":"We are hosting a competition where the community can showcase their most inventive use of textual inversion concepts in text-to-image or text-to-video.","date":"2022-10-20T00:00:00.000Z","formattedDate":"October 20, 2022","tags":[],"readingTime":2.55,"hasTruncateMarker":false,"authors":[],"frontMatter":{}},"content":"We are hosting a competition where the community can showcase their most inventive use of textual inversion concepts in text-to-image or text-to-video.\\n\\nOur compute cluster; `Nataili`, currently comprises of 3 nodes, two have 3090, the other has 2 x A5000.\\n\\nWe estimate `Nataili` can handle 12 concepts per hour, and we can add more workers if there is high demand.\\n\\nHopefully demand will be high, we want to train **hundreds** of new concepts!\\n\\n# Schedule\\n\\n2022/10/20 - Stage 1 begins, train concept command opened for usage\\n\\n2022/10/22 12AM UTC - Stage 2 begins, text to image command opened for usage\\n\\n2022/10/22 12PM UTC - Stage 1 ends, train concept command closed\\n\\n2022/10/24 12PM UTC - Stage 2 ends, no more entries will be accepted\\n\\n2022/10/24 6-12PM UTC - Winners announced\\n\\n\\n# What does `most inventive use` mean?\\n\\nWhatever you want it to mean! be creative! experiment! \\n\\nThere are several categories we will look at:\\n\\n* anything that\'s particularly creative, ~ artistic ~ or a e s t h e t i c\\n\\n![20221019203426_00000](https://user-images.githubusercontent.com/106811348/197045193-d6f9c56b-9989-4f1c-b42a-bb02d62d77cd.png)\\n\\n* composition; meaning anything related to how big things are, their position, the angle, etc\\n\\n* styling; \\n\\n![image](https://user-images.githubusercontent.com/106811348/197045629-029ba6f5-1f79-475c-9ce7-969aaf3d253b.png)\\n\\n* `The Sims(TM): Stable Diffusion edition`\\n\\n## So I can trai-\\n\\n* Yes, as long as it\'s sfw\\n\\n## `The Sims(TM): Stable Diffusion edition` ?\\n\\nFor this event the theme is \u201cThe Sims: Stable Diffusion edition\u201d. \\n\\nSo we have selected a subset of [products from Amazon Berkely Objects dataset](https://github.com/sd-webui/abo).\\n\\nAny other object is welcome too these are just a good source of data for this part of the competition.\\n\\nEach product has images from multiple angles, the train concept command accepts up to 10 images, so choose the angles and modify backgrounds, experiment!\\n\\nThe goal with this category is to generate an image using the trained object, and the other categories apply, your imagination is the only limit! style a couch, try to make a BIG couch, try to make a couch on top of a mountain, try to make a vaporwave couch, anything!\\n\\n# How do I train a concept using the discord bot?\\n\\nType `/trainconcept` then press tab to go through the fields\\n\\n`Concept name` is just a name for your concept, it doesn\'t have to be a single word\\n\\n`Placeholder` is what you will use in prompts to represent your concept\\nAdd `<` and `>` so it is unique, multiple words should be hyphenated\\n\\n`Initializer` is used as the starting point for training your concept, so this should be a single word that represents your concept\\n\\nMinimum 2 images. Squareish aspect ratios work best\\n\\n![Untitled-2](https://user-images.githubusercontent.com/106811348/197035834-cc973e29-31f8-48de-be2d-788fbe938b2e.png)\\n![image](https://user-images.githubusercontent.com/106811348/197035870-b91ef2a8-0ffd-47e1-a8df-9600df26cd6b.png)\\n\\n# How do I use the trained concept?\\n\\n## Prompting with concepts\\n\\nWhen your concept is trained you can use it in prompts.\\n\\n`a cute <nvidiafu> as an astronaut`:\\n\\n![image](https://user-images.githubusercontent.com/106811348/197037250-044ea241-72a5-4caa-b772-35034245b4b6.png)\\n\\nor `a green <green-couch> sitting on top of a floor, a 3D render, trending on polycount, minimalism, rendered in cinema4d`:\\n\\n![image](https://user-images.githubusercontent.com/106811348/197037344-7ce72188-9129-4ba2-8a28-cba5fd664a9c.png)\\n\\n## Using concepts in the webui\\n\\nThe discord bot will give you a link to a `.zip` file, download this, extract it, and put the folder in `stable-diffusion-webui/models/custom/sd-concepts-library`\\n\\n![image](https://user-images.githubusercontent.com/106811348/197037892-ce53bea4-d1db-4b25-bb7c-7dfe4d71b2b1.png)"}]}')}}]);