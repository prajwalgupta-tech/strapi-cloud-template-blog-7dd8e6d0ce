import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCouponCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_coupon_cards';
  info: {
    displayName: 'Coupon card';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    code: Schema.Attribute.String;
    discount: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 22;
      }>;
    type: Schema.Attribute.Enumeration<['percent', 'flat']>;
    valid_till: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    test: Schema.Attribute.String;
  };
}

export interface SharedPdPageTop extends Struct.ComponentSchema {
  collectionName: 'components_shared_pd_page_tops';
  info: {
    displayName: 'PD page top';
  };
  attributes: {
    about: Schema.Attribute.Text;
    age: Schema.Attribute.String & Schema.Attribute.Required;
    aka: Schema.Attribute.String;
    count_of_tests: Schema.Attribute.String & Schema.Attribute.Required;
    Fasting_required: Schema.Attribute.Boolean & Schema.Attribute.Required;
    gender: Schema.Attribute.String & Schema.Attribute.Required;
    highlights: Schema.Attribute.String;
    includes_tests: Schema.Attribute.JSON & Schema.Attribute.Required;
    Name: Schema.Attribute.String;
    organs_covered: Schema.Attribute.String;
    package_type: Schema.Attribute.String & Schema.Attribute.Required;
    preperation_header: Schema.Attribute.String & Schema.Attribute.Required;
    preperation_text: Schema.Attribute.Text & Schema.Attribute.Required;
    product_id: Schema.Attribute.String;
    reports_in: Schema.Attribute.String & Schema.Attribute.Required;
    sample_type: Schema.Attribute.String & Schema.Attribute.Required;
    symptoms: Schema.Attribute.String;
    why: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.coupon-card': SharedCouponCard;
      'shared.media': SharedMedia;
      'shared.pd-page-top': SharedPdPageTop;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
