<template>
  <div>
    <el-button @click="changePage()" type="success" icon="el-icon-plus" round style="float: right;">{{  $t('addButton') 
      }}
    </el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="studentName" :label="$t('studentName')" width="150"></el-table-column>
      <el-table-column prop="studentRegistrationNumber" :label="$t('studentRegistrationNumber')" width="200">
      </el-table-column>
      <el-table-column prop="dateOfBirth" :label="$t('dateOfBirth')" width="120"></el-table-column>
      <el-table-column prop="gender" :label="$t('gender')" width="100"></el-table-column>
      <el-table-column prop="fatherName" :label="$t('fatherName')" width="150"></el-table-column>
      <el-table-column prop="phoneNumber" :label="$t('phoneNumber')" width="150"></el-table-column>
      <el-table-column fixed="right" :label="$t('operationsLabel')">
        <template slot-scope="scope">
          <el-button type="info" size="mini" @click.native.prevent="handleEdit(scope.row)" icon="el-icon-edit">
            {{  $t('editButton')  }}</el-button>
          <el-button type="danger" size="mini" @click.native.prevent="handleDelete(scope.row._id)"
            icon="el-icon-delete">
            {{  $t('deleteButton')  }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import _ from 'lodash'

export default {
  async mounted() {
    this.tableData = _.cloneDeep(await axios.get('https://student-koa.herokuapp.com/student')).data
    // this.fetchData()
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    changePage() {
      router.push('/form')
    },
    handleDelete(rowId) {
      this.$confirm('This will permanently delete. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async () => {
        await axios.delete('https://student-koa.herokuapp.com/student/' + rowId)
        this.fetchData()
        this.$message({
          type: 'success',
          message: 'Deleted Successfully !'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete Cancelled !'
        })
      })
    },
    async fetchData() {
      this.tableData = (await axios.get('https://student-koa.herokuapp.com/student')).data
    },
    handleEdit(row) {
      router.push({ name: 'Form', params: { id: row._id } })
      // console.log(row._id)
    }
  }
}
</script>
<style>
.el-button.el-button--success.is-round {
  margin-bottom: 20px;
}
</style>
