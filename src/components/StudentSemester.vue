<template>
  <v-card
    min-width="200"
    max-width="200"
    @mouseover="showSettings = true"
    @mouseleave="showSettings = false"
    :loading="isSemesterLoading(id)"
    :disabled="isSemesterLoading(id)"
  >
    <v-card-text>
      <div
        v-if="operation === 'view'"
        class="d-flex align-center"
      >
        {{ name }}
        <v-spacer/>
        <v-btn v-if="showSettings" x-small icon>
          <v-icon @click="operation = 'add-subject'">mdi-plus</v-icon>
        </v-btn>
        <v-menu
          bottom
          left
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              x-small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click="startEdit">
              <v-list-item-title>
                <v-icon small left>mdi-pencil</v-icon>
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="deleteSemester">
              <v-list-item-title>
                <v-icon small left>mdi-delete</v-icon>
                Delete
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-if="operation === 'add-subject'">
        <div class="d-flex align-center">
          {{ name }}
          <v-spacer/>
          <v-btn x-small icon>
            <v-icon @click="operation = 'view'">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-autocomplete
          v-model="addedSubject"
          :items="subjects"
          :loading="addingSubject"
          :disabled="addingSubject"
          class="pt-2"
          outlined
          dense
          hide-details="auto"
          placeholder="Search..."
          item-text="name"
          item-value="id"
          @change="addSubject"
        />
      </div>
      <!-- Edit Start -->
      <div v-if="operation === 'edit'">
        <div class="d-flex align-center">
          {{ newName }}
          <v-spacer />
          <v-btn x-small icon @click="cancelEdit" :disabled="isSemesterLoading(id)" class="mr-1">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-btn x-small icon color="green" @click="saveEdit" :loading="isSemesterLoading(id)">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </div>
        <p class="error--text mb-0">{{ editError }}</p>
        <v-text-field
          v-model="newName"
          class="pt-2"
          outlined
          dense
          hide-details
          :error-messages="editError"
          :disabled="isSemesterLoading(id)"
          prepend-inner-icon="mdi-text"
          placeholder="Name"
        />
        <v-menu
          v-model="startPicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="newStart"
              class="mt-2"
              outlined
              dense
              prepend-inner-icon="mdi-calendar"
              readonly
              hide-details
              :error-messages="editError"
              :disabled="isSemesterLoading(id)"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="newStart"
            no-title
            @input="startPicker = false"
          />
        </v-menu>
        <v-menu
          v-model="endPicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="newEnd"
              class="mt-2"
              outlined
              dense
              prepend-inner-icon="mdi-calendar"
              hide-details
              readonly
              :disabled="isSemesterLoading(id)"
              :error-messages="editError"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="newEnd"
            no-title
            @input="endPicker = false"
          />
        </v-menu>
      </div>
      <!-- Edit End -->
      <draggable
        :id="this.id"
        v-model="attempts"
        group="studentSemester"
        @add="moveSubject"
      >
        <SubjectAttempt
          v-for="attempt in attempts"
          :key="attempt.id"
          :id="attempt.id"
          :semester-id="id"
          :subject-id="attempt.subjectId"
          :professor="attempt.professor"
          :grade="attempt.grade"
        />
      </draggable>
    </v-card-text>
  </v-card>
</template>

<script>
import Draggable from 'vuedraggable';
import { mapActions, mapGetters } from 'vuex';
import SubjectAttempt from './SubjectAttempt.vue';

export default {
  components: { SubjectAttempt, Draggable },
  name: 'StudentSemester',
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    showSettings: false,
    operation: 'view',
    newName: '',
    newStart: '',
    newEnd: '',
    startPicker: false,
    endPicker: false,
    editError: null,
    addedSubject: null,
    addingSubject: false,
  }),
  computed: {
    ...mapGetters('user', ['user', 'userId']),
    ...mapGetters('plannedSemester', ['isSemesterLoading']),
    ...mapGetters('subject', ['subjects']),
    ...mapGetters('subjectAttempt', ['semesterAttempts', 'areSemesterAttemptsLoaded']),
    attempts: {
      get() {
        return this.semesterAttempts(this.id);
      },
      set(value) {
        this.$store.commit('subjectAttempt/SET_SEMESTER_ATTEMPTS', {
          semesterId: this.id,
          attempts: value,
        });
      },
    },
  },
  methods: {
    ...mapActions('plannedSemester', [
      'updateSemester',
      'removeSemester',
    ]),
    ...mapActions('subjectAttempt', [
      'fetchSemesterAttempts',
      'addSubjectAttempt',
      'moveSubjectAttempt',
    ]),
    deleteSemester() {
      this.removeSemester({
        studentId: this.userId,
        semesterId: this.id,
      });
    },
    startEdit() {
      this.newName = this.name;
      this.newStart = this.startDate;
      this.newEnd = this.endDate;
      this.operation = 'edit';
    },
    cancelEdit() {
      this.newName = this.name;
      this.newStart = this.startDate;
      this.newEnd = this.endDate;
      this.editError = null;
      this.operation = 'view';
    },
    saveEdit() {
      this.editError = null;
      this.updateSemester({
        studentId: this.user.data.uid,
        semester: {
          id: this.id,
          name: this.newName,
          startDate: this.newStart,
          endDate: this.newEnd,
        },
      }).then(() => {
        this.operation = 'view';
      }).catch((e) => {
        this.editError = e.response.data.error.message;
      });
    },
    addSubject(subjectId) {
      this.addingSubject = true;

      this.addSubjectAttempt({
        studentId: this.userId,
        semesterId: this.id,
        subjectId,
      }).then(() => {
        this.addingSubject = false;
        this.addedSubject = null;
      });
    },
    moveSubject(event) {
      this.moveSubjectAttempt({
        studentId: this.userId,
        attemptId: event.item.id,
        oldSemesterId: event.from.id,
        newSemesterId: event.to.id,
      });
    },
  },
  mounted() {
    if (!this.areSemesterAttemptsLoaded(this.id)) {
      this.fetchSemesterAttempts({
        studentId: this.userId,
        semesterId: this.id,
      });
    }
  },
};
</script>
