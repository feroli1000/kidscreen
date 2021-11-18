<template>
  <q-page padding>
    <p>QUALIDADE DE VIDA RELACIONADA À SAÚDE</p>
    <p class="text-bold">Prezados pais ou tutores:</p>
    <p>
      Como está o/a jovem entrevistado/a? Como ele/ela se sente? Isto é o que
      queremos saber sobre ele/ela.
    </p>
    <p>
      Por favor, responda as questões da melhor maneira possível, fazendo com
      que as suas respostas possam refletir a perspectiva deste/desta jovem.
      Enquanto pensa nas respostas, procure recordar a última semana, ou seja,
      os últimos sete dias.
    </p>

    <div class="q-mt-lg border-top">
      <q-list>
        <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to change Toggle state.
        -->
        <q-item>
          <q-item-section class="text-body1 text-bold"
            >Quem está respondendo este questionário?</q-item-section
          >
        </q-item>
        <q-item v-for="p in parents_list" :key="p.value" tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="parent" :val="p.value" color="orange" />
          </q-item-section>
          <q-item-section class="text-body1">
            {{ p.text }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-mt-lg q-pt-md border-top">
      <p class="text-bold q-pl-md">
        Qual a data de nascimento do/a jovem entrevistado/a?
      </p>
      <div class="row q-gutter-x-sm">
        <div class="col">
          <q-input type="number" v-model="day" label="Dia" maxlength="2" />
        </div>
        <div class="col">
          <q-input type="number" v-model="month" label="Mês" maxlength="2" />
        </div>
        <div class="col">
          <q-input type="number" v-model="year" label="Ano" maxlength="4" />
        </div>
      </div>
    </div>

    <div class="q-mt-lg border-top">
      <q-list>
        <q-item>
          <q-item-section class="text-body1 text-bold"
            >Qual o sexo do/a jovem entrevistado/a?</q-item-section
          >
        </q-item>
        <q-item v-for="g in genders_list" :key="g.value" tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="gender" :val="g.value" color="orange" />
          </q-item-section>
          <q-item-section class="text-body1">
            {{ g.text }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-my-xl">
      <q-btn
        size="xl"
        color="green"
        class="full-width"
        label="Avançar"
        icon-right="send"
        @click="forward"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Question } from 'components/models';

export default defineComponent({
  name: 'PresentationParent',
  setup() {
    const day = ref(null);
    const month = ref(null);
    const year = ref(null);
    const parent = ref(0);
    const gender = ref(0);
    const parents_list = ref<Question[]>([
      { value: 1, text: 'Mãe' },
      { value: 2, text: 'Pai' },
      { value: 3, text: 'Madrasta / Companheira do pai' },
      { value: 4, text: 'Padrasto / Companheiro da mãe' },
      { value: 5, text: 'Avó' },
      { value: 6, text: 'Avô' },
      { value: 7, text: 'Outro' },
    ]);
    const genders_list = ref<Question[]>([
      { value: 1, text: 'Feminino' },
      { value: 2, text: 'Masculino' },
    ]);

    function forward() {
      alert('avancaar');
    }

    return {
      parent,
      parents_list,
      gender,
      genders_list,
      day,
      month,
      year,
      forward,
    };
  },
});
</script>
