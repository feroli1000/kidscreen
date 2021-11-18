<template>
  <q-page padding>
    <p>QUALIDADE DE VIDA RELACIONADA À SAÚDE</p>
    <p>
      Olá!!! Como está? Como você se sente? Isto é o que queremos saber de você.
    </p>
    <p>
      Por favor, leia cada questão com atenção enquanto pensa em sua resposta.
      Procure recordar a última semana, ou seja, os últimos 7 dias. Qual é a
      resposta que primeiro ocorre a você? Escolha a opção que acredita ser
      melhor para você e assinale a resposta.
    </p>
    <p>
      Lembre-se: Isto não é uma prova. Não existem respostas certas ou erradas.
      Porém, é importante que responda todas as questões.
    </p>
    <p>
      Não comente suas respostas com ninguém. Ninguém mais, além de nós, terá
      acesso as suas respostas. Suas respostas serão confidenciais.
    </p>

    <div class="q-mt-lg border-top">
      <q-list>
        <q-item>
          <q-item-section class="text-body1 text-bold"
            >Qual é seu sexo?</q-item-section
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

    <div class="q-mt-lg q-pt-md border-top">
      <p class="text-bold q-pl-md">Qual é sua data de nascimento?</p>
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
            >Você tem alguma deficiência, doença ou problema médico
            crônico?</q-item-section
          >
        </q-item>
        <q-item v-for="d in no_yes_list" :key="d.value" tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="disease" :val="d.value" color="orange" />
          </q-item-section>
          <q-item-section class="text-body1">
            {{ d.text }}
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
  name: 'PresentationYoung',
  setup() {
    const day = ref(null);
    const month = ref(null);
    const year = ref(null);
    const gender = ref(0);
    const disease = ref(0);
    const genders_list = ref<Question[]>([
      { value: 1, text: 'Feminino' },
      { value: 2, text: 'Masculino' },
    ]);
    const no_yes_list = ref<Question[]>([
      { value: 1, text: 'Não' },
      { value: 2, text: 'Sim' },
    ]);

    function forward() {
      alert('avancaar');
    }

    return {
      gender,
      genders_list,
      no_yes_list,
      disease,
      day,
      month,
      year,
      forward,
    };
  },
});
</script>
