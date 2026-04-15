<script setup lang="ts">
import JobBoardCart from './JobBoardCart.vue'
import JobBoardModal from './JobBoardModal.vue'
import closeIcon from '@/components/images/icon-remove.svg'
import { useJobsStore } from '@/stores/jobs'
const jobs = useJobsStore()

console.log(jobs.data[8]?.languages)
const getImageUrl = (path: String) => {
  const cleanPath = path.replace('./', '../../')
  return new URL(cleanPath, import.meta.url).href
}
</script>
<template>
  <main class="jobs-board-container">
    <JobBoardCart v-for="job in jobs.data" :key="job.id" :class="{ featured: job.featured }">
      <template #job-info>
        <div class="company-data">
          <div class="jobs-logos">
            <img
              :src="getImageUrl(job.logo)"
              alt="Company logo which is looking for worker"
              class="jobs-logos__logo"
            />
          </div>
          <div class="jobs-board-info">
            <div class="job-places-info">
              <p class="job-places-info__company-name">{{ job.company }}</p>
              <p v-if="job.new" class="job-places-info__new">NEW!</p>
              <p v-if="job.featured" class="job-places-info__featured">FEATURED</p>
            </div>
            <div class="job-details">
              <p class="job-details__position">{{ job.position }}</p>
              <div class="job-hire-details">
                <p class="job-hire-details__post">{{ job.postedAt }}</p>
                <p class="job-hire-details__contract">{{ job.contract }}</p>
                <p class="job-hire-details__location">{{ job.location }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="job-board-requirements">
          <ul class="requirements-list">
            <li v-for="tag in jobs.getJobTags(job)" :key="tag">
              <button class="requirements-list__tag" @click="jobs.addFilter(tag)">
                {{ tag }}
              </button>
            </li>
          </ul>
        </div>
      </template>
    </JobBoardCart>
    <Transition mode="out-in" name="v-job">
      <JobBoardModal v-if="jobs.jobFilters.length > 0">
        <template #board-modal>
          <TransitionGroup tag="ul" name="tag-list" class="board-tag">
            <li class="board-tag__tag" v-for="tag in jobs.jobFilters" :key="tag">
              {{ tag }}
              <button class="board-tag__remove-button" @click="jobs.removeTag(tag)">
                <img :src="closeIcon" alt="remove filter tag icon" />
              </button>
            </li>
          </TransitionGroup>
          <button class="clear-button" @click="jobs.clearFilters()">Clear</button>
        </template>
      </JobBoardModal>
    </Transition>
  </main>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as color;
@use '@/assets/sass/fonts.scss' as font;
@use '@/assets/sass/breakpoints.scss' as breakpoint;
@use '@/assets/sass/mixins.scss' as mixin;
@media (min-width: breakpoint.$mobile-view) {
  .jobs-board-container {
    @include mixin.flex-layout($flex-direction: column);
    @include mixin.set-gap(5em 0);
    padding: 10em 1em 3em 1em;
    .company-data {
      .jobs-logos {
        @include mixin.set-position-element($position: absolute, $top: -1.75em, $left: 1em);
        &__logo {
          width: 60%;
          height: 60%;
        }
      }
      .jobs-board-info {
        @include mixin.flex-layout($flex-direction: column);
        @include mixin.set-gap(1em);
        .job-places-info {
          @include mixin.flex-layout($align-items: start);
          @include mixin.set-gap(0, 1em);
          &__company-name {
            padding-right: 1em;
            margin-top: 0.5em;
            @include mixin.set-typography(
              $color: color.$primary-green-400,
              $font-weight: map.get(font.$font-weights, 'bold')
            );
            line-height: 1;
            height: 0.75rem;
          }
          &__new,
          &__featured {
            background-color: color.$primary-green-400;
            @include mixin.set-typography($color: color.$neutral-green-50);
            padding: 0.4em 0.75em;
            border-radius: 3em;
            line-height: 1;
            height: 1.5rem;
          }
          &__featured {
            background-color: black;
          }
        }
        .job-details {
          @include mixin.flex-layout($flex-direction: column);
          @include mixin.set-gap(1em, 0);
          &__position {
            @include mixin.set-typography($font-weight: map.get(font.$font-weights, 'bold'));
            cursor: pointer;
            transition: color 0.3s ease-in-out;
            &:hover {
              @include mixin.set-typography($color: color.$primary-green-400);
            }
          }
          .job-hire-details {
            @include mixin.flex-layout();
            @include mixin.set-gap(0, 1.75em);
            &__post,
            &__contract,
            &__location {
              @include mixin.set-typography(
                $color: color.$neutral-gray-400,
                $font-weight: map.get(font.$font-weights, 'medium')
              );
            }
            &__contract,
            &__location {
              position: relative;
              @include mixin.set-position-element($position: relative);
              &::before {
                @include mixin.set-position-element($position: absolute, $top: 30%, $left: -25%);
                content: '';
                border-radius: 50%;
                width: 4px;
                height: 4px;
                background-color: color.$neutral-gray-400;
              }
            }
          }
        }
      }
    }
    .job-board-requirements {
      @include mixin.flex-layout();
      @include mixin.set-gap(0, 1em);
      padding: 1em 0;
      border-top: 0.1em solid color.$neutral-gray-400;

      .requirements-list {
        @include mixin.flex-layout();
        @include mixin.set-gap(0, 1em);
        list-style-type: none;
        &__tag {
          padding: 0.5em 0.75em;
          line-height: 1;
          height: 1.5rem;
          @include mixin.set-typography(
            $color: color.$primary-green-400,
            $font-weight: map.get(font.$font-weights, 'bold')
          );
          transition:
            background-color 0.3s ease-in-out,
            color 0.3s ease-in-out;
          &:hover {
            background-color: color.$primary-green-400;
            @include mixin.set-typography($color: color.$neutral-green-50);
          }
        }
      }
    }
    .featured {
      border-left: 0.4em solid color.$primary-green-400;
    }

    .board-tag {
      @include mixin.flex-layout($flex-wrap: wrap);
      width: 90%;
      &__tag {
        padding: 0.5em;
        list-style-type: none;
        @include mixin.set-typography(
          $color: color.$primary-green-400,
          $font-weight: map.get(font.$font-weights, 'medium')
        );
      }
      &__remove-button {
        background-color: color.$primary-green-400;
        padding: 0.5em;
        border-top-right-radius: 0.4em;
        border-bottom-right-radius: 0.4em;
        transition: background-color 0.3s ease-in-out;
        &:hover {
          background-color: color.$neutral-green-900;
        }
      }
    }
    .clear-button {
      @include mixin.set-typography(
        $color: color.$primary-green-400,
        $font-weight: map.get(font.$font-weights, 'medium')
      );
      font-size: 1rem;
      padding: 1em;
    }
    .v-job-enter-active,
    .v-job-leave-active {
      transition: opacity 0.3s ease-in-out;
    }

    .v-job-enter-from,
    .v-job-leave-to {
      opacity: 0;
    }

    .v-job-enter-to,
    .v-job-leave-from {
      opacity: 1;
    }
    .tag-list-enter-active,
    .tag-list-leave-active {
      transition: all 0.3s ease;
    }
    .tag-list-enter-from,
    .tag-list-leave-to {
      opacity: 0;
      transform: scale(0.1);
    }
    .tag-list-move {
      transition: transform 0.3s ease;
       opacity: 1;
    }
  }
}
@media (min-width: breakpoint.$desktop-small) {
  .jobs-board-container {
    @include mixin.set-gap(3em, 0);
    .company-data {
      @include mixin.flex-layout();
      @include mixin.set-gap(0, 2em);
      .jobs-logos {
        @include mixin.set-position-element($position: static);
        @include mixin.flex-layout($align-items: center, $justify-content: center);
        &__logo {
          width: 100%;
          height: 100%;
        }
      }
      .jobs-board-info {
        .job-places-info {
          @include mixin.flex-layout($align-items: center);
        }
      }
    }
    .job-board-requirements {
      border: none;
    }
  }
}
</style>
