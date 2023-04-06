<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

const props = defineProps({
  timestamp: {
    required: true,
    type: Number,
  },
});

const diffForUsers = () => {
  return dayjs.unix(props.timestamp).fromNow();
};

const userFriendlyDate = () => {
  return dayjs.unix(props.timestamp).format("llll");
};
</script>

<template>
  <span :title="userFriendlyDate()">
    {{ diffForUsers() }}
  </span>
</template>

<style></style>
