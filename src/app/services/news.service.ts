import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  News = [
    {
    id: 1,
author: 'Nathan Reynolds',
title: "Japan plane collision: 5 crew members found dead on Coast Guard aircraft",
content: "Government announces a comprehensive plan for infrastructure investment, targeting urban renewal projects to enhance city living conditions and stimulate economic growth.",
description: "Building the foundations for a brighter future.",
publishedAt: '2024-01-02T09:30:00Z',
url: './assets/n1.jpeg'
},
{
    id: 2,
author: 'Emily Carter',
title: "Why Are Industry Players Unhappy with India’s New Cybersecurity Directives?",
content: "Leaders from around the world convene at a global summit to discuss and strategize on addressing escalating cybersecurity challenges for international collaboration.",
description: "Securing the digital frontier.",
publishedAt: '2024-01-03T11:15:00Z',
url: './assets/n2.jpeg'},
{id: 3 ,
author: 'Michael Turner',
title: "Space Exploration Mission Discovers New Planetary System",
content: "Scientists reveal the findings of a recent space exploration mission, discovering a new planetary system with unique characteristics, providing valuable insights into the vastness of the cosmos.",
description: "Exploring the mysteries beyond our solar system.",
publishedAt: '2024-01-04T14:45:00Z',
url: './assets/n3.jpeg'
  },
{
id: 4,
author: 'Olivia Mitchell',
title: "Healthcare Innovation Award Recognizes Pioneering Medical Solutions",
content: "Innovative healthcare solutions receive recognition at an awards ceremony, highlighting pioneering advancements that have the potential to transform patient care and medical practices.",
description: "Honoring breakthroughs in healthcare.",
publishedAt: '2024-01-05T10:00:00Z',
url: './assets/n4.jpeg'},
{id: 5,
author: 'Benjamin Harris',
title: "Community-Led Initiative Promotes Environmental Conservation",
content: "Local communities initiate a collaborative effort to address environmental conservation, implementing projects to protect natural resources and promote sustainable practices for future generations.",
description: "Empowering communities for a greener tomorrow.",
publishedAt: '2024-01-06T16:20:00Z',
url: './assets/n5.jpeg'
  },
{
id: 6,
author: 'Sophia Anderson',
title: "Artificial Intelligence Symposium Explores Ethical Implications",
content: "Experts gather at an AI symposium to delve into the ethical implications of artificial intelligence, discussing the responsible development and deployment of advanced technologies in society.",
description: "Navigating the ethical landscape of AI.",
publishedAt: '2024-01-07T12:30:00Z',
url: './assets/n6.jpeg'
  }
];
  }
