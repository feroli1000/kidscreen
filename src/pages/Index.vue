<template>
  <q-page class="row items-center justify-evenly q-px-lg q-pb-xl">
    <q-btn
      v-if="!numeroSelecionado"
      size="xl"
      color="orange-10"
      class="full-width"
      @click="selecionarNumero(52)"
      >Kidscreen 52</q-btn
    >
    <q-btn
      v-if="!numeroSelecionado"
      size="xl"
      color="pink-10"
      class="full-width"
      @click="selecionarNumero(27)"
      >Kidscreen 27</q-btn
    >
    <q-btn
      v-if="!numeroSelecionado"
      size="xl"
      color="green-10"
      class="full-width"
      @click="selecionarNumero(10)"
      >Kidscreen 10</q-btn
    >
    <div v-if="numeroSelecionado" class="full-width">
      <q-card>
        <q-card-section>
          <div class="text-h2 text-center">Kidscreen {{ selecao }}</div>
        </q-card-section>
        <q-card-section>
          <q-btn
            size="xl"
            color="purple-10"
            class="full-width q-my-xl"
            @click="selecionarTipo(1)"
            >Jovem</q-btn
          >
        </q-card-section>
        <q-card-section>
          <q-btn
            size="xl"
            color="purple-10"
            class="full-width q-my-xl"
            @click="selecionarTipo(2)"
            >Pais/Tutores</q-btn
          >
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const store = useStore();
    const selecao = ref<number>(0);

    const numeroSelecionado = computed(() => selecao.value > 0);

    function selecionarNumero(numero: number) {
      store.commit('questionario/SET_NUMERO', numero);
      selecao.value = numero;
    }

    function selecionarTipo(tipo: number) {
      store.commit('questionario/SET_TIPO', tipo);
    }

    return { selecionarNumero, selecionarTipo, numeroSelecionado, selecao };
  },
});
</script>
