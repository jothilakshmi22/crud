import React from "react";
import "./polymer.css";

const BlogData = () => {
  const Datas = [
    {
      img: "https://uploads-ssl.webflow.com/61488f4f65be16b5ebbd450b/633134a671944e4dd2e0e97b_facebook-4477765_960_720.jpg",

      title: "The Best Free Facebook Ads Reporting Templates",
      subcontent:
        "Looking for free templates for your Facebook Ads reporting? Native Facebook Ads reporting can be pretty lacking and insufficient. Here, we gathered the best Facebook Ads reporting templates.",
    },
    {
      img: "https://neilpatel.com/wp-content/uploads/2017/09/spending-a-lot-on-facebook-ads.jpg",
      title: "Views & sharing reimagined: September 2022",
      subcontent:
        "This update is the last in a set of major changes to the flow & structure of the product. Check out our new Views tab, a reimagined sharing process, &  data connectors.",
    },

    {
      img: "https://allstarsdigital.in/wp-content/uploads/2020/09/Facebook-Ads-Cover.png",

      title: "6 Reasons Why Your Facebook Ads Conversion Rate is Low",
      subcontent:
        "There could be many reasons why your Facebook Ads have a low conversion rate. Here are the 6 most common causes and how you can fix them.",
    },
    {
      img: "https://images.ctfassets.net/az3stxsro5h5/73c5bmLHkMz26vb2eTT7o2/e20d81770761ac029d2abde9bdfbbab3/Jan4-How_to_Use_Facebook_Ads_Manager-Shareimages-Feature-lv",

      title: "How to Effectively Optimize Facebook Ads",
      subcontent:
        "Today, Ash Gupta, a data scientist, Facebook Ads optimization pro and former Tech Lead at Google Adwords tells us 11 tips on how to optimize Facebook Ads.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQni4aiXv8tJer-ZRkBP9ObOSTSvOEo09AiLw&usqp=CAU",
      title: "How To Increase The Average Deal Size",
      subcontent:
        "Want to increase your revenue without making more deals? Here, we'll show you several ways you can increase your average deal size. Find the best tools and get the best strategies to reliably increase.",
    },
    {
      img: "https://www.techfunnel.com/wp-content/uploads/2022/04/Annual-Recurring-Revenue.jpg",
      title: "What is ARR and How Do You Improve It?",
      subcontent:
        "ARR is an important metric you should be measuring and including on your performance dashboards. But what is ARR and how can you improve it?",
    },
    {
      img: "https://enterprisersproject.com/sites/default/files/styles/google_discover/public/images/cio_talent_4.png?itok=iYZrcC7B",
      title: "A new Polymer experience: August 2022",
      subcontent:
        "Many of our updates over the last few months have been leading up to this moment. We are so excited to share this redesign with all of you as it is an important step toward our vision of Polymer.",
    },
    {
      img: "https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg",
      title: "How To Find Top-Performing Facebook Ads",
      subcontent:
        "Looking for your top-performing ads on Facebook? Here's how to find your best-performing ads on Facebook, and the best tools to keep improving them.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6V9b-n18ZIGvSzs3AjHSdwepcbNCgeztNKy_UinJ7Kk2yLiqc3GHuf5VuouUzfGPgoJ8&usqp=CAU",
      title: "What is a Good Gross Profit Margin? (2022)",
      subcontent:
        "Gross and net profit margin are important metrics for analyzing a business’ health, but what exactly is a good profit margin and how can you improve it?",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div>
        <div className="container card-area">
          <div className="row">
            <div className="col">
              <div class=" card-widths mb-5 " style={{ width: "18rem" }}>
                <img src={card.img} class="card-img-top" alt="..." />
                <div class="card-body p-2">
                  <h5 class="card-title card-title-content">{card.title}</h5>
                  <p class="card-text card-content">{card.subcontent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="ms-sm-5">
        <div className="grids ms-sm-5 ms-0 ms-md-0">
          {Datas.map(renderCard)}
        </div>
      </div>
    </>
  );
};

export default BlogData;
