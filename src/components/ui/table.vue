<template>
  <div>    
    <div class="row table-row table-header">
        <div class="col" v-for="(column, index) in columns" :key="index">
        <div class="header-cell">{{ column.label }}</div>
        </div>
    </div>

    <div v-for="(row, rowIndex) in paginatedRows" :key="rowIndex" class="row table-row">
      <div class="col" v-for="(column, colIndex) in columns" :key="colIndex">
        <div class="data-cell">

            <div class="row align-items-center" v-if="column.field === 'realtor'">
                <div class="col-3 table-img"><img :src="row.realtor.img" alt="img" height="40" width="40" style="border-radius: 50% !important;" /></div>  
                <div class="col-9 name">
                    <h6>{{ row.realtor.name }}</h6>
                    <p>{{ row.realtor.email }}</p>
                </div>                  
            </div>
            <div v-else> 
                <div class="drop" v-if="column.field === ''">
                    <i class="bi bi-three-dots-vertical"></i>
                </div>
                <div class="" v-if="column.field === 'status'">
                    <span class="active-span" v-if="row.status === 'active'">Active</span>
                    <span class="inactive-span" v-if="row.status === 'inactive'">Inactive</span>
                    <span class="nil-span" v-if="row.status === 'nil'">NILL</span>
                </div>
                <div class="" v-else>
                    <span>{{ row[column.field] }}</span>
                </div>   
            </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
        <div class="">
            <i class="bi bi-database-fill"></i>    <span class="bg-light">20,000 records</span>
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1" class="bg-light"><i class="bi bi-chevron-left"></i></button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-light"><i class="bi bi-chevron-right"></i></button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    data: Array,
    perPage: Number,
  },
  data() {
    return {
      currentPage: 1,
      columns: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'Realtor',
          field: 'realtor',
        },
        {
          label: 'Phone',
          field: 'phone',
        },
        {
          label: 'Created On',
          field: 'createdAt',
        },
        {
          label: 'Assigned',
          field: 'assigned',
        },
        {
          label: 'Plans',
          field: 'plans',
        },
        {
          label: 'Status',
          field: 'status',
        },
        {
          label: '',
          field: '',
        },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.perPage);
    },
    paginatedRows() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.data.slice(startIndex, endIndex);
    },
  },
  methods: {
    getStatusClass(status) {
      if (status === "active") {
        return "active-span";
      } else if (status === "inactive") {
        return "inactive-span";
      } else {
        return "null-active";
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
  },
};
</script>

<style scoped>
.bg-light{
    background: #fff !important;
}
.header-cell {
  font-weight: bold;
}
.name{
    text-align: left;
}

.data-cell, .header-cell {
  text-align: center;
  padding: 10px;
}
.table-header{
    background-color: rgb(255, 94, 0) !important;
    color: #fff;
}
.view-all{
    color: rgb(255, 94, 0) !important;
}
.table-row{
    align-items: center;
  background-color: #fff;
  border-radius: 4px !important;
  box-shadow: 0 2px 8px rgba(128, 123, 123, 0.26);
  margin: 1% 0;
}
p{
    margin: 0;
}
span{
    padding: 5px 20px;
    border-radius: 14px;

}
.active-span{
    padding: 5px 20px;
    background-color: rgb(5, 111, 250);
    color: #fff;
}
.inactive-span{
    background-color: rgb(255, 38, 0);
    color: #fff;
}
.nil-span{
    background-color: rgba(185, 185, 185, 0.4);
}
.card-img{
    border-radius: 50% !important;
}
.drop{
    text-align: right;
}
</style>