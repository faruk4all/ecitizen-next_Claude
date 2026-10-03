export const nav = [["Home","/"],["Services","/services"],["Packages","/packages"],["Portfolio","/portfolio"],["Process","/process"],["Insights","/blog"],["About","/about"]] as const;
export const PHONE = { label: "+880 1313 886828", tel: "tel:8801313886828", wa: "https://wa.me/8801313886828" };
export const outcomes = [
  ["Get more customers","Reach, campaigns, search, content and conversion support.","/services#customers"],
  ["Build digital presence","Websites, landing pages, e-commerce and digital foundations.","/services#presence"],
  ["Look more professional","Brand identity, design, content and campaign creative.","/services#professional"],
  ["Turn an idea real","Custom digital products, automation and AI-enabled solutions.","/services#ideas"],
] as const;
export const steps = [
  ["Understand","Business, audience, offer and market context.","Clarity"],
  ["Build","Brand, website, content and conversion foundations.","Credibility"],
  ["Reach","Distribution through content, search and campaigns.","Attention"],
  ["Convert","Offers, landing experiences and lead capture.","Action"],
  ["Optimize","Measure results and refine what is working.","Evidence"], // copy inferred: source truncated
  ["Grow","Scale the channels that prove their value.","Momentum"],   // copy inferred: source truncated
] as const;
export type Plan = { name: string; cadence: string; price: number; offer: boolean; items: string[]; featured?: boolean };
export const plans: Plan[] = [
  { name:"Starter", cadence:"one-time", price:5000, offer:false, items:["Facebook, Instagram & LinkedIn setup","Google Business Profile","WhatsApp Business connection","Digital shop setup"] },
  { name:"Grow", cadence:"/ month", price:7500, offer:true, items:["15 social post designs","3 reels / short videos","Basic Meta Ads management","Basic On-Page SEO"] },
  { name:"Professional", cadence:"/ month", price:10000, offer:true, featured:true, items:["30 social post designs","5 reels / short videos","Advanced Meta + Google Ads","Technical SEO support"] },
  { name:"Advanced", cadence:"/ month", price:15000, offer:true, items:["60 social post designs","8 reels / short videos","Meta, Google & TikTok Ads","On-Page, Technical & Off-Page SEO"] },
  { name:"Enterprise", cadence:"/ month", price:25000, offer:true, items:["60+ social post designs","10 reels / short videos","Pro & funnel-focused campaigns","Complete SEO + website updates"] },
];
export const taka = (n: number) => "৳" + n.toLocaleString("en-US");
