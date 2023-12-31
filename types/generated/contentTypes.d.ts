import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.CollectionType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'About';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Information: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    about_timelines: Attribute.Relation<
      'api::about.about',
      'oneToMany',
      'api::about-timeline.about-timeline'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutTimelineAboutTimeline extends Schema.CollectionType {
  collectionName: 'about_timelines';
  info: {
    singularName: 'about-timeline';
    pluralName: 'about-timelines';
    displayName: 'About Timeline';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Year_Information: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Year: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-timeline.about-timeline',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-timeline.about-timeline',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAldropDoorKitAldropDoorKit extends Schema.CollectionType {
  collectionName: 'aldrop_door_kits';
  info: {
    singularName: 'aldrop-door-kit';
    pluralName: 'aldrop-door-kits';
    displayName: 'Aldrop Door Kits';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    By_Application: Attribute.Media;
    By_Type: Attribute.Media;
    aldrop_product_categories: Attribute.Relation<
      'api::aldrop-door-kit.aldrop-door-kit',
      'oneToMany',
      'api::aldrop-product-categorie.aldrop-product-categorie'
    >;
    Information: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::aldrop-door-kit.aldrop-door-kit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::aldrop-door-kit.aldrop-door-kit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAldropProductCategorieAldropProductCategorie
  extends Schema.CollectionType {
  collectionName: 'aldrop_product_categories';
  info: {
    singularName: 'aldrop-product-categorie';
    pluralName: 'aldrop-product-categories';
    displayName: 'Aldrop Product Filters';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Category: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Luxurious',
          'Pocket Friendly',
          'Super Friendly',
          'Classic (All time fav)',
          'Mordern & Minimalist',
          'Bold',
          'Traditional',
          'Brass',
          'Zinc',
          'Aluminium',
          'Stainless Steel'
        ]
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::aldrop-product-categorie.aldrop-product-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::aldrop-product-categorie.aldrop-product-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAwardAward extends Schema.CollectionType {
  collectionName: 'awards';
  info: {
    singularName: 'award';
    pluralName: 'awards';
    displayName: 'Awards';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Information: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::award.award',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::award.award',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogInsideBlogInside extends Schema.CollectionType {
  collectionName: 'blog_insides';
  info: {
    singularName: 'blog-inside';
    pluralName: 'blog-insides';
    displayName: 'Blog Inside';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Image: Attribute.Media;
    Information_Container1: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Other_Images: Attribute.Media;
    Information_Container2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Tags: Attribute.Enumeration<
      [
        '"Handles"',
        '"Aldrop"',
        '"Mortise Locks"',
        '"Luxurious Collection"',
        '"Door closers"'
      ]
    >;
    Blog_Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-inside.blog-inside',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-inside.blog-inside',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBodyDatchBodyDatch extends Schema.CollectionType {
  collectionName: 'body_datches';
  info: {
    singularName: 'body-datch';
    pluralName: 'body-datches';
    displayName: 'Body Datch';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::body-datch.body-datch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::body-datch.body-datch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrassStripBrassStrip extends Schema.CollectionType {
  collectionName: 'brass_strips';
  info: {
    singularName: 'brass-strip';
    pluralName: 'brass-strips';
    displayName: 'Brass Strips';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brass-strip.brass-strip',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brass-strip.brass-strip',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoatHookCoatHook extends Schema.CollectionType {
  collectionName: 'coat_hooks';
  info: {
    singularName: 'coat-hook';
    pluralName: 'coat-hooks';
    displayName: 'Coat Hooks';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coat-hook.coat-hook',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coat-hook.coat-hook',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCupboardCategorieCupboardCategorie
  extends Schema.CollectionType {
  collectionName: 'cupboard_categories';
  info: {
    singularName: 'cupboard-categorie';
    pluralName: 'cupboard-categories';
    displayName: 'Cupboard Categories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cupboard-categorie.cupboard-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cupboard-categorie.cupboard-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCupboardKnobCupboardKnob extends Schema.CollectionType {
  collectionName: 'cupboard_knobs';
  info: {
    singularName: 'cupboard-knob';
    pluralName: 'cupboard-knobs';
    displayName: 'Cupboard Knobs';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cupboard-knob.cupboard-knob',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cupboard-knob.cupboard-knob',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCupboardPullCupboardPull extends Schema.CollectionType {
  collectionName: 'cupboard_pulls';
  info: {
    singularName: 'cupboard-pull';
    pluralName: 'cupboard-pulls';
    displayName: 'Cupboard Pulls';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cupboard-pull.cupboard-pull',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cupboard-pull.cupboard-pull',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCyLockCategorieCyLockCategorie
  extends Schema.CollectionType {
  collectionName: 'cy_lock_categories';
  info: {
    singularName: 'cy-lock-categorie';
    pluralName: 'cy-lock-categories';
    displayName: 'CY Lock Categories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cy-lock-categorie.cy-lock-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cy-lock-categorie.cy-lock-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDecorativeDecorative extends Schema.CollectionType {
  collectionName: 'decoratives';
  info: {
    singularName: 'decorative';
    pluralName: 'decoratives';
    displayName: 'Decoratives';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Decoratives_Information: Attribute.Blocks;
    Decoratives_Image: Attribute.Media;
    brass_strips: Attribute.Relation<
      'api::decorative.decorative',
      'oneToMany',
      'api::brass-strip.brass-strip'
    >;
    domes: Attribute.Relation<
      'api::decorative.decorative',
      'oneToMany',
      'api::dome.dome'
    >;
    flat_domes: Attribute.Relation<
      'api::decorative.decorative',
      'oneToMany',
      'api::flat-dome.flat-dome'
    >;
    god_statues: Attribute.Relation<
      'api::decorative.decorative',
      'oneToMany',
      'api::god-statue.god-statue'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::decorative.decorative',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::decorative.decorative',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDenlockDenlock extends Schema.CollectionType {
  collectionName: 'denlocks';
  info: {
    singularName: 'denlock';
    pluralName: 'denlocks';
    displayName: 'Denlock Categories';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::denlock.denlock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::denlock.denlock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDomeDome extends Schema.CollectionType {
  collectionName: 'domes';
  info: {
    singularName: 'dome';
    pluralName: 'domes';
    displayName: 'Domes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::dome.dome', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::dome.dome', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiDoorAccessorieDoorAccessorie extends Schema.CollectionType {
  collectionName: 'door_accessories';
  info: {
    singularName: 'door-accessorie';
    pluralName: 'door-accessories';
    displayName: 'Door Accessories';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    door_accessories_designs: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToMany',
      'api::door-accessories-design.door-accessories-design'
    >;
    door_gate_hooks: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToMany',
      'api::door-gate-hook.door-gate-hook'
    >;
    body_datches: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToMany',
      'api::body-datch.body-datch'
    >;
    coat_hooks: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToMany',
      'api::coat-hook.coat-hook'
    >;
    door_knockers: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToMany',
      'api::door-knocker.door-knocker'
    >;
    door_stoppers: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToMany',
      'api::door-stopper.door-stopper'
    >;
    door_chains: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToMany',
      'api::door-chain.door-chain'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-accessorie.door-accessorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDoorAccessoriesDesignDoorAccessoriesDesign
  extends Schema.CollectionType {
  collectionName: 'door_accessories_designs';
  info: {
    singularName: 'door-accessories-design';
    pluralName: 'door-accessories-designs';
    displayName: 'Door Accessories Designs';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-accessories-design.door-accessories-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-accessories-design.door-accessories-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDoorChainDoorChain extends Schema.CollectionType {
  collectionName: 'door_chains';
  info: {
    singularName: 'door-chain';
    pluralName: 'door-chains';
    displayName: 'Door Chain';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-chain.door-chain',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-chain.door-chain',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDoorGateHookDoorGateHook extends Schema.CollectionType {
  collectionName: 'door_gate_hooks';
  info: {
    singularName: 'door-gate-hook';
    pluralName: 'door-gate-hooks';
    displayName: 'Door Gate Hooks';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-gate-hook.door-gate-hook',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-gate-hook.door-gate-hook',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDoorHingesAndControlSystemDoorHingesAndControlSystem
  extends Schema.CollectionType {
  collectionName: 'door_hinges_and_control_systems';
  info: {
    singularName: 'door-hinges-and-control-system';
    pluralName: 'door-hinges-and-control-systems';
    displayName: 'Door Hinges & Control System';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Butt_Hinges_Information: Attribute.Blocks;
    Butt_Hinges_Image: Attribute.Media;
    Butt_Hinges_Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Butt_Hinges_Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Butt_Hinges_Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Butt_Hinges_Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Door_Closure_Main_Image: Attribute.Media;
    Door_Closure_Images: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-hinges-and-control-system.door-hinges-and-control-system',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-hinges-and-control-system.door-hinges-and-control-system',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDoorKnockerDoorKnocker extends Schema.CollectionType {
  collectionName: 'door_knockers';
  info: {
    singularName: 'door-knocker';
    pluralName: 'door-knockers';
    displayName: 'Door Knocker';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-knocker.door-knocker',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-knocker.door-knocker',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDoorLockAndLatcheDoorLockAndLatche
  extends Schema.CollectionType {
  collectionName: 'door_lock_and_latches';
  info: {
    singularName: 'door-lock-and-latche';
    pluralName: 'door-lock-and-latches';
    displayName: 'Door Lock & Latches';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Padlock_Title: Attribute.Blocks;
    padlock_categories: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToMany',
      'api::padlock-categorie.padlock-categorie'
    >;
    Lock_Cylindes_Title: Attribute.Blocks;
    lock_cylindes_categories: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToMany',
      'api::lock-cylindes-categorie.lock-cylindes-categorie'
    >;
    Lock_Cylides_Equisite: Attribute.Media;
    Denlock_Title: Attribute.Blocks;
    denlock_categories: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToMany',
      'api::denlock.denlock'
    >;
    Mortise_Latch_Title: Attribute.Blocks;
    Mortise_Body_Latch_Information: Attribute.Blocks;
    Mortise_Body_Latch_Image: Attribute.Media;
    m_latch_body_categories: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToMany',
      'api::m-latch-body-categorie.m-latch-body-categorie'
    >;
    CY_Lock_Body_Information: Attribute.Blocks;
    cy_lock_categories: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToMany',
      'api::cy-lock-categorie.cy-lock-categorie'
    >;
    CY_Equisite: Attribute.Media;
    Main_Door_Locks_Informaton: Attribute.Blocks;
    Main_Door_Locks_Image: Attribute.Media;
    mortise_latch_categories: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToMany',
      'api::mortise-latch-categorie.mortise-latch-categorie'
    >;
    lock_and_latch_filters: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToMany',
      'api::lock-and-latch-filter.lock-and-latch-filter'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-lock-and-latche.door-lock-and-latche',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDoorStopperDoorStopper extends Schema.CollectionType {
  collectionName: 'door_stoppers';
  info: {
    singularName: 'door-stopper';
    pluralName: 'door-stoppers';
    displayName: 'Door Stopper';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::door-stopper.door-stopper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::door-stopper.door-stopper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDrawerCategorieDrawerCategorie
  extends Schema.CollectionType {
  collectionName: 'drawer_categories';
  info: {
    singularName: 'drawer-categorie';
    pluralName: 'drawer-categories';
    displayName: 'Drawer Categories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::drawer-categorie.drawer-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::drawer-categorie.drawer-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFlatDomeFlatDome extends Schema.CollectionType {
  collectionName: 'flat_domes';
  info: {
    singularName: 'flat-dome';
    pluralName: 'flat-domes';
    displayName: 'Flat Domes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::flat-dome.flat-dome',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::flat-dome.flat-dome',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFurnitureLockFurnitureLock extends Schema.CollectionType {
  collectionName: 'furniture_locks';
  info: {
    singularName: 'furniture-lock';
    pluralName: 'furniture-locks';
    displayName: 'Furniture Locks';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Cupboard_Locks_Information: Attribute.Blocks;
    Cupboard_Locks_Image: Attribute.Media;
    cupboard_categories: Attribute.Relation<
      'api::furniture-lock.furniture-lock',
      'oneToMany',
      'api::cupboard-categorie.cupboard-categorie'
    >;
    Sliding_Cupboard_Locks_Title: Attribute.String;
    Sliding_Cupboard_Locks_Main_Image: Attribute.Media;
    Sliding_Cupboard_Locks_Main_Image_Title: Attribute.String;
    Sliding_Cupboard_Locks_Side_Image: Attribute.Media;
    Sliding_Cupboard_Locks_Side_Image_Title: Attribute.String;
    Drawer_Infromation: Attribute.Blocks;
    Drawer_Image: Attribute.Media;
    drawer_categories: Attribute.Relation<
      'api::furniture-lock.furniture-lock',
      'oneToMany',
      'api::drawer-categorie.drawer-categorie'
    >;
    cupboard_pulls: Attribute.Relation<
      'api::furniture-lock.furniture-lock',
      'oneToMany',
      'api::cupboard-pull.cupboard-pull'
    >;
    cupboard_knobs: Attribute.Relation<
      'api::furniture-lock.furniture-lock',
      'oneToMany',
      'api::cupboard-knob.cupboard-knob'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::furniture-lock.furniture-lock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::furniture-lock.furniture-lock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGodStatueGodStatue extends Schema.CollectionType {
  collectionName: 'god_statues';
  info: {
    singularName: 'god-statue';
    pluralName: 'god-statues';
    displayName: 'God statues';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::god-statue.god-statue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::god-statue.god-statue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLockAndLatchFilterLockAndLatchFilter
  extends Schema.CollectionType {
  collectionName: 'lock_and_latch_filters';
  info: {
    singularName: 'lock-and-latch-filter';
    pluralName: 'lock-and-latch-filters';
    displayName: 'Lock & Latch Filters';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Category: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Luxurious',
          'Pocket Friendly',
          'Super Friendly',
          'Classic (All time fav)',
          'Mordern & Minimalist',
          'Bold',
          'Traditional',
          'Brass',
          'Zinc',
          'Aluminium',
          'Stainless Steel'
        ]
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lock-and-latch-filter.lock-and-latch-filter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lock-and-latch-filter.lock-and-latch-filter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLockAndLatchesPadlockLockAndLatchesPadlock
  extends Schema.CollectionType {
  collectionName: 'lock_and_latches_padlocks';
  info: {
    singularName: 'lock-and-latches-padlock';
    pluralName: 'lock-and-latches-padlocks';
    displayName: 'Lock & Latches Padlock';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lock-and-latches-padlock.lock-and-latches-padlock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lock-and-latches-padlock.lock-and-latches-padlock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLockCylindeLockCylinde extends Schema.CollectionType {
  collectionName: 'lock_cylindes';
  info: {
    singularName: 'lock-cylinde';
    pluralName: 'lock-cylindes';
    displayName: 'Lock Cylindes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lock-cylinde.lock-cylinde',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lock-cylinde.lock-cylinde',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLockCylindesCategorieLockCylindesCategorie
  extends Schema.CollectionType {
  collectionName: 'lock_cylindes_categories';
  info: {
    singularName: 'lock-cylindes-categorie';
    pluralName: 'lock-cylindes-categories';
    displayName: 'Lock Cylindes Categories';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lock-cylindes-categorie.lock-cylindes-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lock-cylindes-categorie.lock-cylindes-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMLatchBodyCategorieMLatchBodyCategorie
  extends Schema.CollectionType {
  collectionName: 'm_latch_body_categories';
  info: {
    singularName: 'm-latch-body-categorie';
    pluralName: 'm-latch-body-categories';
    displayName: 'M Latch Body Categories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::m-latch-body-categorie.m-latch-body-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::m-latch-body-categorie.m-latch-body-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainDoorLockSetMainDoorLockSet
  extends Schema.CollectionType {
  collectionName: 'main_door_lock_sets';
  info: {
    singularName: 'main-door-lock-set';
    pluralName: 'main-door-lock-sets';
    displayName: 'Main Door Lock Set';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Door_Pull_Lock_Sets_Image: Attribute.Media;
    main_door_lock_set_designs: Attribute.Relation<
      'api::main-door-lock-set.main-door-lock-set',
      'oneToMany',
      'api::main-door-lock-set-design.main-door-lock-set-design'
    >;
    Queen_Lock_set_Image: Attribute.Media;
    queen_lock_set_designs: Attribute.Relation<
      'api::main-door-lock-set.main-door-lock-set',
      'oneToMany',
      'api::queen-lock-set-design.queen-lock-set-design'
    >;
    Door_pull_with_Main_door_lock_Image: Attribute.Media;
    Mortise_Lock_Sets_Image: Attribute.Media;
    Door_Pull_Lock_Sets_Information: Attribute.Blocks;
    Queen_Lock_set_Information: Attribute.Blocks;
    Door_pull_with_Main_door_lock_Information: Attribute.Blocks;
    Mortise_Lock_Sets_Information: Attribute.Blocks;
    Title: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-door-lock-set.main-door-lock-set',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-door-lock-set.main-door-lock-set',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainDoorLockSetDesignMainDoorLockSetDesign
  extends Schema.CollectionType {
  collectionName: 'main_door_lock_set_designs';
  info: {
    singularName: 'main-door-lock-set-design';
    pluralName: 'main-door-lock-set-designs';
    displayName: 'Main Door Lock Set Design';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-door-lock-set-design.main-door-lock-set-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-door-lock-set-design.main-door-lock-set-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMediaMedia extends Schema.CollectionType {
  collectionName: 'medias';
  info: {
    singularName: 'media';
    pluralName: 'medias';
    displayName: 'Media';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Images: Attribute.Media;
    Slider_Images: Attribute.Media;
    awards: Attribute.Relation<
      'api::media.media',
      'oneToMany',
      'api::award.award'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::media.media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::media.media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMissionAndVisionMissionAndVision
  extends Schema.CollectionType {
  collectionName: 'mission_and_visions';
  info: {
    singularName: 'mission-and-vision';
    pluralName: 'mission-and-visions';
    displayName: 'Mission & Vision';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Our_Vision: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Vision_Image: Attribute.Media;
    Our_Mission: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Mission_Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mission-and-vision.mission-and-vision',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mission-and-vision.mission-and-vision',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMortiseLatchCategorieMortiseLatchCategorie
  extends Schema.CollectionType {
  collectionName: 'mortise_latch_categories';
  info: {
    singularName: 'mortise-latch-categorie';
    pluralName: 'mortise-latch-categories';
    displayName: 'Mortise Latch Categories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mortise-latch-categorie.mortise-latch-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mortise-latch-categorie.mortise-latch-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMortiseLockSetMortiseLockSet extends Schema.CollectionType {
  collectionName: 'mortise_lock_sets';
  info: {
    singularName: 'mortise-lock-set';
    pluralName: 'mortise-lock-sets';
    displayName: 'Mortise Lock Set';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    By_Application: Attribute.Media;
    By_Type: Attribute.Media;
    mortise_product_categories: Attribute.Relation<
      'api::mortise-lock-set.mortise-lock-set',
      'oneToMany',
      'api::mortise-product-categorie.mortise-product-categorie'
    >;
    Information: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mortise-lock-set.mortise-lock-set',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mortise-lock-set.mortise-lock-set',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMortiseProductCategorieMortiseProductCategorie
  extends Schema.CollectionType {
  collectionName: 'mortise_product_categories';
  info: {
    singularName: 'mortise-product-categorie';
    pluralName: 'mortise-product-categories';
    displayName: 'Mortise Product Filters';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Category: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Luxurious',
          'Pocket Friendly',
          'Super Friendly',
          'Classic (All time fav)',
          'Mordern & Minimalist',
          'Bold',
          'Traditional',
          'Brass',
          'Zinc',
          'Aluminium',
          'Stainless Steel'
        ]
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mortise-product-categorie.mortise-product-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mortise-product-categorie.mortise-product-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurTeamOurTeam extends Schema.CollectionType {
  collectionName: 'our_teams';
  info: {
    singularName: 'our-team';
    pluralName: 'our-teams';
    displayName: 'Our Team';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Banner_Image: Attribute.Media;
    Heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Bottom_Image: Attribute.Media;
    Bottom_Heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    team_members: Attribute.Relation<
      'api::our-team.our-team',
      'oneToMany',
      'api::team-member.team-member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-team.our-team',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-team.our-team',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPadlockCategoriePadlockCategorie
  extends Schema.CollectionType {
  collectionName: 'padlock_categories';
  info: {
    singularName: 'padlock-categorie';
    pluralName: 'padlock-categories';
    displayName: 'Padlock Categories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::padlock-categorie.padlock-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::padlock-categorie.padlock-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Products';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Sub_Heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    product_items: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product-item.product-item'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductItemProductItem extends Schema.CollectionType {
  collectionName: 'product_items';
  info: {
    singularName: 'product-item';
    pluralName: 'product-items';
    displayName: 'Product Items';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-item.product-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-item.product-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPullHandlePullHandle extends Schema.CollectionType {
  collectionName: 'pull_handles';
  info: {
    singularName: 'pull-handle';
    pluralName: 'pull-handles';
    displayName: 'Pull Handles';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    By_Application: Attribute.Media;
    By_Type: Attribute.Media;
    pull_handles_product_categories: Attribute.Relation<
      'api::pull-handle.pull-handle',
      'oneToMany',
      'api::pull-handles-product-categorie.pull-handles-product-categorie'
    >;
    Information: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pull-handle.pull-handle',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pull-handle.pull-handle',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPullHandlesProductCategoriePullHandlesProductCategorie
  extends Schema.CollectionType {
  collectionName: 'pull_handles_product_categories';
  info: {
    singularName: 'pull-handles-product-categorie';
    pluralName: 'pull-handles-product-categories';
    displayName: 'Pull Handles Product Filters';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Category: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Luxurious',
          'Pocket Friendly',
          'Super Friendly',
          'Classic (All time fav)',
          'Mordern & Minimalist',
          'Bold',
          'Traditional',
          'Brass',
          'Zinc',
          'Aluminium',
          'Stainless Steel'
        ]
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pull-handles-product-categorie.pull-handles-product-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pull-handles-product-categorie.pull-handles-product-categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQueenLockSetDesignQueenLockSetDesign
  extends Schema.CollectionType {
  collectionName: 'queen_lock_set_designs';
  info: {
    singularName: 'queen-lock-set-design';
    pluralName: 'queen-lock-set-designs';
    displayName: 'Queen Lock Set Design';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Color1: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color3: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Color4: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::queen-lock-set-design.queen-lock-set-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::queen-lock-set-design.queen-lock-set-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamMemberTeamMember extends Schema.CollectionType {
  collectionName: 'team_members';
  info: {
    singularName: 'team-member';
    pluralName: 'team-members';
    displayName: 'Team Members';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Information: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Name: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Profession: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-member.team-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-member.team-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTheProcessTheProcess extends Schema.CollectionType {
  collectionName: 'the_processes';
  info: {
    singularName: 'the-process';
    pluralName: 'the-processes';
    displayName: 'The Process';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Information: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::the-process.the-process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::the-process.the-process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUspUsp extends Schema.CollectionType {
  collectionName: 'usps';
  info: {
    singularName: 'usp';
    pluralName: 'usps';
    displayName: 'USP';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::usp.usp', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::usp.usp', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiUspCardUspCard extends Schema.CollectionType {
  collectionName: 'usp_cards';
  info: {
    singularName: 'usp-card';
    pluralName: 'usp-cards';
    displayName: 'USP-Cards';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Card: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::usp-card.usp-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::usp-card.usp-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhatWeUseWhatWeUse extends Schema.CollectionType {
  collectionName: 'what_we_uses';
  info: {
    singularName: 'what-we-use';
    pluralName: 'what-we-uses';
    displayName: 'What we use';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media;
    Information: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::what-we-use.what-we-use',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::what-we-use.what-we-use',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhoWeAreWhoWeAre extends Schema.CollectionType {
  collectionName: 'who_we_ares';
  info: {
    singularName: 'who-we-are';
    pluralName: 'who-we-ares';
    displayName: 'Expertise';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Card1: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Card2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Card3: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    the_processes: Attribute.Relation<
      'api::who-we-are.who-we-are',
      'oneToMany',
      'api::the-process.the-process'
    >;
    what_we_uses: Attribute.Relation<
      'api::who-we-are.who-we-are',
      'oneToMany',
      'api::what-we-use.what-we-use'
    >;
    Banner_Video: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::who-we-are.who-we-are',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::who-we-are.who-we-are',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about.about': ApiAboutAbout;
      'api::about-timeline.about-timeline': ApiAboutTimelineAboutTimeline;
      'api::aldrop-door-kit.aldrop-door-kit': ApiAldropDoorKitAldropDoorKit;
      'api::aldrop-product-categorie.aldrop-product-categorie': ApiAldropProductCategorieAldropProductCategorie;
      'api::award.award': ApiAwardAward;
      'api::blog-inside.blog-inside': ApiBlogInsideBlogInside;
      'api::body-datch.body-datch': ApiBodyDatchBodyDatch;
      'api::brass-strip.brass-strip': ApiBrassStripBrassStrip;
      'api::coat-hook.coat-hook': ApiCoatHookCoatHook;
      'api::cupboard-categorie.cupboard-categorie': ApiCupboardCategorieCupboardCategorie;
      'api::cupboard-knob.cupboard-knob': ApiCupboardKnobCupboardKnob;
      'api::cupboard-pull.cupboard-pull': ApiCupboardPullCupboardPull;
      'api::cy-lock-categorie.cy-lock-categorie': ApiCyLockCategorieCyLockCategorie;
      'api::decorative.decorative': ApiDecorativeDecorative;
      'api::denlock.denlock': ApiDenlockDenlock;
      'api::dome.dome': ApiDomeDome;
      'api::door-accessorie.door-accessorie': ApiDoorAccessorieDoorAccessorie;
      'api::door-accessories-design.door-accessories-design': ApiDoorAccessoriesDesignDoorAccessoriesDesign;
      'api::door-chain.door-chain': ApiDoorChainDoorChain;
      'api::door-gate-hook.door-gate-hook': ApiDoorGateHookDoorGateHook;
      'api::door-hinges-and-control-system.door-hinges-and-control-system': ApiDoorHingesAndControlSystemDoorHingesAndControlSystem;
      'api::door-knocker.door-knocker': ApiDoorKnockerDoorKnocker;
      'api::door-lock-and-latche.door-lock-and-latche': ApiDoorLockAndLatcheDoorLockAndLatche;
      'api::door-stopper.door-stopper': ApiDoorStopperDoorStopper;
      'api::drawer-categorie.drawer-categorie': ApiDrawerCategorieDrawerCategorie;
      'api::flat-dome.flat-dome': ApiFlatDomeFlatDome;
      'api::furniture-lock.furniture-lock': ApiFurnitureLockFurnitureLock;
      'api::god-statue.god-statue': ApiGodStatueGodStatue;
      'api::lock-and-latch-filter.lock-and-latch-filter': ApiLockAndLatchFilterLockAndLatchFilter;
      'api::lock-and-latches-padlock.lock-and-latches-padlock': ApiLockAndLatchesPadlockLockAndLatchesPadlock;
      'api::lock-cylinde.lock-cylinde': ApiLockCylindeLockCylinde;
      'api::lock-cylindes-categorie.lock-cylindes-categorie': ApiLockCylindesCategorieLockCylindesCategorie;
      'api::m-latch-body-categorie.m-latch-body-categorie': ApiMLatchBodyCategorieMLatchBodyCategorie;
      'api::main-door-lock-set.main-door-lock-set': ApiMainDoorLockSetMainDoorLockSet;
      'api::main-door-lock-set-design.main-door-lock-set-design': ApiMainDoorLockSetDesignMainDoorLockSetDesign;
      'api::media.media': ApiMediaMedia;
      'api::mission-and-vision.mission-and-vision': ApiMissionAndVisionMissionAndVision;
      'api::mortise-latch-categorie.mortise-latch-categorie': ApiMortiseLatchCategorieMortiseLatchCategorie;
      'api::mortise-lock-set.mortise-lock-set': ApiMortiseLockSetMortiseLockSet;
      'api::mortise-product-categorie.mortise-product-categorie': ApiMortiseProductCategorieMortiseProductCategorie;
      'api::our-team.our-team': ApiOurTeamOurTeam;
      'api::padlock-categorie.padlock-categorie': ApiPadlockCategoriePadlockCategorie;
      'api::product.product': ApiProductProduct;
      'api::product-item.product-item': ApiProductItemProductItem;
      'api::pull-handle.pull-handle': ApiPullHandlePullHandle;
      'api::pull-handles-product-categorie.pull-handles-product-categorie': ApiPullHandlesProductCategoriePullHandlesProductCategorie;
      'api::queen-lock-set-design.queen-lock-set-design': ApiQueenLockSetDesignQueenLockSetDesign;
      'api::team-member.team-member': ApiTeamMemberTeamMember;
      'api::the-process.the-process': ApiTheProcessTheProcess;
      'api::usp.usp': ApiUspUsp;
      'api::usp-card.usp-card': ApiUspCardUspCard;
      'api::what-we-use.what-we-use': ApiWhatWeUseWhatWeUse;
      'api::who-we-are.who-we-are': ApiWhoWeAreWhoWeAre;
    }
  }
}
