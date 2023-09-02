<template>
    <hero-page>
<!-- 
                    <bar-chart
                      v-if="row.type === 'bar'"
                      :chartid="row.chartid"
                      :labels="row.list"
                      :label="`text`"
                      :data="row.data"
                      :width="row.width"
                      :height="row.height"
                      :text="row.text"
                      :borderColor="row.borderColor"
                      :backgroundColor="row.backgroundColor"
                    />

                    <doughnut-chart
                      v-if="row.type === 'doughnut'"
                      :labels="row.list"
                      :label="``"
                      :data="row.data"
                      :width="row.width"
                      :height="row.height"
                      :parsing="row.parsing"
                      :chartid="row.chartid"
                      :tooltips="row.tooltips"
                    
                    />
                     -->
    <div class="hero-carrd">
        <div class="wrapper py-5 d-flex justify-content-between">
            <div class="col-lg-8 col-sm-12">
                <base-card class="p-5 sub1">
                    <div class="d-flex justify-content-between">
                        <h3>Subsciption</h3>
                        <div class="dropdown">
                            <span type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                <button class="btn btn-sm herobg px-3 py-2">Last Six Months<i class="bi bi-chevron-down"></i></button>
                            </span>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/dashboard">Jan</a></li>
                                <li><a class="dropdown-item" href="/realtor">Feb</a></li>
                                <li><a  class="dropdown-item" href="/properties">March</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 mt-4">
                    <bar-chart 
                    :labels="['jan', 'march', 'april', 'may', 'jan', 'march', 'april', 'may']"
                    :data="{'one': ['10', '20', '34', '2', '10', '20', '34', '2'],
                            'two': ['30', '50', '32', '12', '30', '10', '14', '42']
                        }"
                    :label="`text`"
                    ></bar-chart>
                    </div>
                </base-card>
            </div>
            <div class="col-lg-4 col-sm-12">
                <base-card class="p-5 sub2">
                    <div class="row">
                        <h3>Subsciption</h3>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-lg-8 col-md-12 mt-4">
                            <doughnut-chart 
                            :data="['10', '20', '34']"
                            :label="`text`"
                            :labels="['jan', 'march', 'april']"
                            ></doughnut-chart>
                        </div>
                        <div class="col"></div>
                    </div>
                </base-card>
            </div>
        </div>
    </div>
    </hero-page>
</template>
<script>
export default{
    
}
</script>