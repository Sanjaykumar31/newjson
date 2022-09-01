<template>
  <div>
    <el-form class="form" ref="form" :rules="rules" :model="form">
      <h2>{{  $t('formTitle')  }}</h2>
      <h3>{{  isEditable ? $t('formEditTitle') : $t('formAddTitle')  }}</h3>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('studentName')" prop="studentName">
            <el-input v-model="form.studentName" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('studentRegistrationNumber')" prop="studentRegistrationNumber">
            <el-input v-model="form.studentRegistrationNumber" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
        <el-col class='grid' :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('dateOfBirth')" prop="dateOfBirth">
            <el-date-picker v-model="form.dateOfBirth" type="date" placeholder="Select" format="MM/dd/yyyy"
              value-format="MM/dd/yyyy"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('gender')" prop="gender">
            <el-radio v-model="form.gender" label="Male">Male</el-radio>
            <el-radio v-model="form.gender" label="Female">Female</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('phoneNumber')" prop="phoneNumber">
            <el-input v-model.number="form.phoneNumber" clearable placeholder="1234567890" maxlength="10"
              style="width:220px"><template slot="prepend">+91</template></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('email')" prop="email">
            <el-input v-model="form.email" placeholder=' abc@gmail.com' clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('mediumOfStudy')" prop="mediumOfStudy">
            <el-radio v-model="form.mediumOfStudy" label="Tamil">Tamil</el-radio>
            <el-radio v-model="form.mediumOfStudy" label="English">English</el-radio>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('fatherName')" prop="fatherName">
            <el-input v-model="form.fatherName" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('motherName')" prop="motherName">
            <el-input v-model="form.motherName" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('homePhoneNumber')" prop="homePhoneNumber">
            <el-input v-model.number="form.homePhoneNumber" clearable placeholder="1234567890" maxlength="10"
              style="width:220px"><template slot="prepend">+91</template></el-input>
          </el-form-item>
        </el-col>
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('languagesKnown')" prop="checkList">
            <el-checkbox-group v-model="form.checkList">
              <el-checkbox label="Tamil "></el-checkbox>
              <el-checkbox label="English "></el-checkbox>
              <el-checkbox label="Hindi "></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('skills')" prop="skills">
            <el-select v-model="form.skills" multiple collapse-tags style="margin-left: 20px;" placeholder="Select "
              clearable filterable>
              <el-option v-for="(item, index) in skill" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('modeOfTravel')"><br />
            <el-radio v-model="form.travelMode" label="By Own">By Own</el-radio>
            <el-radio v-model="form.travelMode" label="College Bus">College Bus</el-radio>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('scholarshipLabel')"></el-form-item>
          <el-form-item>
            <el-switch v-model="form.change" active-text="Yes" inactive-text="No"></el-switch>
          </el-form-item>
        </el-col>
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item label="Scholarship" v-if="form.change">
            <el-select v-model="form.scholarship" v-if="form.change" collapse-tags style="margin-left: 20px;"
              placeholder="Select " clearable filterable>
              <el-option v-for="(item, index) in scholarships" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item :label="$t('addressLabel')"><i class="el-icon-chat-line-square"></i>
      </el-form-item>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('doorNumber')" prop="address.doorNumber">
            <el-input v-model="form.address.doorNumber" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('streetName')" prop="address.streetName">
            <el-input v-model="form.address.streetName" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('city')" prop="address.city">
            <el-input v-model="form.address.city" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('state')" prop="address.states">
            <el-input v-model="form.address.states" clearable style="width:300px"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('country')" prop="address.countryList">
            <el-select v-model="form.address.countryList" placeholder="Select" clearable filterable>
              <el-option v-for="(item, index) in country" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col class="grid" :xs="12" :sm="12" :md="6" :lg="6">
          <el-form-item :label="$t('pinCode')" prop='address.pinCode'>
            <el-input v-model.number="form.address.pinCode" clearable placeholder="600068" maxlength="6"
              style="width:220px"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="buttonstyle">
        <el-form-item>
          <el-button @click="cancelForm" type="danger">{{ $t('cancelButton') }}</el-button>&ensp;
          <el-button v-if="isEditable" @click="handleUpdate" type="success" round>{{ $t('updateButton') }}</el-button>
          <el-button @click="handleSave" v-else="isEditable" type="success" round>{{ $t('saveButton') }}</el-button>
          &ensp;
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import Constants from '@/constants'
import router from '@/router'
import axios from "axios"
import _ from 'lodash'
export default {
  async mounted() {
    this.tableData = (await axios.get('https://student-koa.herokuapp.com/student')).data
    const id = this.$route.params.id
    // const row = this.$route.params.row
    if (!id) {
      this.form = _.cloneDeep(Constants.FORM_LIST)
      this.isEditable = false
    }
    else {
      this.form = (await axios.get('https://student-koa.herokuapp.com/student/' + id)).data
      this.isEditable = true
    }
  },
  data() {
    return {
      form: Constants.FORM_LIST,
      skill: Constants.SKILLS_LIST,
      country: Constants.COUNTRY_LIST,
      change: false,
      isEditable: false,
      tabledata: [],
      rules: Constants.FORM_RULES,
      scholarships: Constants.SCHOLARSHIP_LIST
    }
  },
  methods: {
    cancelForm() {
      this.$refs.form.resetFields()
      router.push('/')
      //     this.$message({
      //       type: 'info',
      //       message: 'Student Registration canceled'
      //     })
    },
    handleSave() {
      if (this.tableData.find(item => item.studentRegistrationNumber == this.form.studentRegistrationNumber)) {
        this.$message({
          type: 'error',
          message: 'Student Registration Number Already Exist',
        })
      } else {
        this.$refs['form'].validate(async (valid) => {
          if (valid) {
            await axios.post(('https://student-koa.herokuapp.com/student'), this.form)
            this.$refs.form.resetFields()
            this.$message({
              type: 'success',
              message: 'Saved Successfully!',
            })
            router.push('/')
          }
          else {
            this.$message({
              type: 'error',
              message: 'Please fill the mandatory fields',
            })
          }
        })
      }
    },
    async handleUpdate() {
      await axios.put('https://student-koa.herokuapp.com/student/' + this.$route.params.id, this.form)
      this.$message({
        type: 'success',
        message: 'Student Data Updated !'
      })
      router.push('/')
    }
  }
}
</script>
<style>
.grid .el-form-item__label {
  text-align: left;
  width: 100%;
}

.buttonstyle {
  float: right;
}
</style>