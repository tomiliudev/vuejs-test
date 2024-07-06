<template>
  <RouterView />
  <p style="margin-top: 3000px">bottom</p>
  <RouterLink :to="{ name: 'scrollHome', hash: '#testTitle' }">ScrollHome</RouterLink> |
  <RouterLink :to="{ name: 'scrollBlog' }">ScrollBlog</RouterLink>
</template>
