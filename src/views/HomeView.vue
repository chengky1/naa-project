<template>
   <Master>
    <!-- <template v-slot:header>
      <h2>Header</h2>
    </template>
    <template v-slot:body>
    </template> -->
    <Header></Header>
    <Body>
     <card>
      <div class="container">
        <h2>Audit Status</h2> 
        <div class="progress">
          <div>Audit-1</div>
          <div class="progress-bar bg-success" style="width:10%">
          </div>
          <div class="progress-bar bg-warning" style="width:10%">
           
          </div>
          <div class="progress-bar bg-danger" style="width:10%">
          </div>
        </div>
      </div> 
    </card>
    </Body>
  </Master>
 <Footer />

</template>

<script>
import axios from 'axios';
 export default {

 }
 async function getData(){
  const data = await http.post('test');

  console.log(data);
}
</script>

<style>

</style>