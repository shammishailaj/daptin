// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import ElementUI, {Notification} from "element-ui";

import Vuetable from "../components/vuetable";
import Vuecard from "../components/vuetable/components/Vuecard.vue";
import DetailedRow from "../components/detailrow/DetailedRow.vue";
import ModelForm from "../components/modelform/ModelForm.vue";
import VuetablePagination from "../components/vuetable/components/VuetablePagination.vue";
import CustomActions from "../components/detailrow/CustomActions.vue";
import TableView from "../components/tableview/TableView.vue";
import SelectOneOrMore from "../components/selectoneormore/SelectOneOrMore.vue";
import ListView from "../components/listview/ListView.vue";
import ActionView from "../components/actionview/ActionView.vue";


import locale from 'element-ui/lib/locale/lang/en'


import "element-ui/lib/theme-default/index.css";
import "tether-shepherd/dist/css/shepherd-theme-dark.css";
import "../components/vuetable/vuetable.css";


// Register my awesome field
import fileUpload from "../components/fields/FileUpload.vue";
Vue.component("fieldFileUpload", fileUpload);
Vue.component("fieldSelectOneOrMore", SelectOneOrMore);


Vue.use(ElementUI, { locale });
Vue.use(Vuetable);
Vue.use(Vuecard);
Vue.use(VuetablePagination);
Vue.use(DetailedRow);

Vue.component('custom-actions', CustomActions);
Vue.component('table-view', TableView);
Vue.component('action-view', ActionView);
Vue.component('list-view', ListView);
Vue.component('model-form', ModelForm);
Vue.component("vuetable", Vuetable);
Vue.component("vuecard", Vuecard);
Vue.component("select-one-or-more", SelectOneOrMore);
Vue.component("detailed-table-row", DetailedRow);
Vue.component("vuetable-pagination", VuetablePagination);
