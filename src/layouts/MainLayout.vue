<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <div class="row">
        <div class="col-xs-12 col-md-6 q-pa-none">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'src/store';
import { YOUNG_TYPE, PARENT_TYPE } from 'src/helpers/constants';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore();
    const questionnaire = computed(
      () => store.state.questionnaire.questionnaire
    );
    const questionnaireModel = computed(() => questionnaire.value.model);
    const personType = computed(() => questionnaire.value.person_type);

    const title = computed(() => {
      let ret = 'Questionário KIDSCREEN ';
      questionnaireModel.value > 0 && (ret += questionnaireModel.value);

      personType.value === YOUNG_TYPE && (ret += ' - Jovem');
      personType.value === PARENT_TYPE && (ret += ' - Pais/Tutores');

      return ret;
    });

    return {
      title,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
