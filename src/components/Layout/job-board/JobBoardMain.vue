<script setup lang="ts">
import JobBoardCart from './JobBoardCart.vue'
import JobBoardModal from './JobBoardModal.vue'
import { useJobsStore } from '@/stores/jobs'
const jobs = useJobsStore()
console.log(jobs.data)
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
          <button class="job-board-requirements__role">{{ job.role }}</button>
          <button class="job-board-requirements__level">{{ job.level }}</button>
          <ul class="requirements-list">
            <li v-for="language in job.languages" :key="language">
              <button class="requirements-list__language">{{ language }}</button>
            </li>
            <li v-for="tool in job.tools" :key="tool">
              <button class="requirements-list__tool">{{ tool }}</button>
            </li>
          </ul>
        </div>
      </template>
    </JobBoardCart>
    <JobBoardModal>
      <template #board-modal>
        <p>hello</p>
      </template>
    </JobBoardModal>
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
      &__role,
      &__level {
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
      .requirements-list {
        @include mixin.flex-layout();
        @include mixin.set-gap(0, 1em);
        list-style-type: none;
        &__language,
        &__tool {
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
