import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'dashboard',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard-home',
      path: `${APP_PREFIX_PATH}/dashboards/home`,
      title: 'dashboard.home',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-catalogue',
      path: `${APP_PREFIX_PATH}/dashboards/catalogue`,
      title: 'dashboard.catalogue',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'dashboard-catalogue-products',
          path: `${APP_PREFIX_PATH}/dashboards/catalogue/products`,
          title: 'dashboard.catalogue.products',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'dashboard-catalogue-categories',
          path: `${APP_PREFIX_PATH}/dashboards/catalogue/categories`,
          title: 'dashboard.catalogue.categories',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'dashboard-catalogue-collections',
          path: `${APP_PREFIX_PATH}/dashboards/catalogue/collections`,
          title: 'dashboard.catalogue.collections',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'dashboard-catalogue-combo',
          path: `${APP_PREFIX_PATH}/dashboards/catalogue/combo`,
          title: 'dashboard.catalogue.combo',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'dashboard-orders',
      path: `${APP_PREFIX_PATH}/dashboards/orders`,
      title: 'dashboard.orders',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-clients',
      path: `${APP_PREFIX_PATH}/dashboards/clients`,
      title: 'dashboard.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'dashboard-clients-list',
          path: `${APP_PREFIX_PATH}/dashboards/clients/list`,
          title: 'dashboard.clients.list',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'dashboard-clients-groups',
          path: `${APP_PREFIX_PATH}/dashboards/clients/groups`,
          title: 'dashboard.clients.groups',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'dashboard-banners',
      path: `${APP_PREFIX_PATH}/dashboards/banners`,
      title: 'dashboard.banners',
      icon: PictureOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-promocodes',
      path: `${APP_PREFIX_PATH}/dashboards/promocodes`,
      title: 'dashboard.promocodes',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-offline',
      path: `${APP_PREFIX_PATH}/dashboards/offline`,
      title: 'dashboard.offline',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'dashboard-offline-adresses',
          path: `${APP_PREFIX_PATH}/dashboards/offline/adresses`,
          title: 'dashboard.offline.adresses',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'dashboard-offline-geozones',
          path: `${APP_PREFIX_PATH}/dashboards/offline/geozones`,
          title: 'dashboard.offline.geozones',
          icon: '',
          breadcrumb: true,
          submenu: []
        }  
      ]
    },
    {
      key: 'dashboard-employees',
      path: `${APP_PREFIX_PATH}/dashboards/employees`,
      title: 'dashboard.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-messages',
      path: `${APP_PREFIX_PATH}/dashboards/messages`,
      title: 'dashboard.messages',
      icon: MailOutlined,
      breadcrumb: true,
      submenu: []
    }
  ]
}
]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'system',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'system.settings',
      icon: SettingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'system-mobile',
      path: `${APP_PREFIX_PATH}/system/mobile`,
      title: 'system.mobile',
      icon: MobileOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'system.logs',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree
]

export default navigationConfig;
