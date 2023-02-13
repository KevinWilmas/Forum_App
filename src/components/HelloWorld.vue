<script setup>
data = {
  categories: [
    {
      id: "c1",
      name: "Chats",
      forums: ["f1"],
    },
  ],
  forums: [
    {
      id: "f1",
      name: "fishing",
      description: "lets talk fishing",
      categoryId: "c1",
      threads: ["t1"],
    },
  ],
  users: [
    {
      id: "u1",
      name: "Alex",
    },
  ],
  threads: [
    {
      id: "t1",
      title: "What is your favorite food?",
      publishedAt: 1698983092,
      posts: [],
      userId: "u1",
    },
  ],
  posts: [
    {
      id: "p1",
      publishedAt: 1698983092,
      userId: "u1",
      text: "I like pizza, and you?",
      threadId: "t1",
    },
  ],
};

data.posts.filter((post) => post.userId === "u1");
thread = data.threads.find((t) => t.id === "t1");
threadPosts = data.posts.filter((p) => p.threadId === thread.id);
</script>

<template></template>

<style scoped></style>
