import React from "react";

import "./category-container.styles.scss";

import CategoryItem from "../../components/category-item/category-item.component";

class CategoryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          subtitle: "Shop Now",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          subtitle: "Shop Now",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          subtitle: "Shop Now",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          subtitle: "View Collection",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          subtitle: "View Collection",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className='category-container'>
        {this.state.sections.map(({ id, ...otherSelectionProps }) => (
          <CategoryItem key={id} {...otherSelectionProps} />
        ))}
      </div>
    );
  }
}
export default CategoryContainer;
