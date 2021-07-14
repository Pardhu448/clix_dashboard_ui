import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FaqPage from './FaqPage'
import  { Helmet } from 'react-helmet';
import  clixdemopicurc from '../shared/clix_dashboard_login_image.png'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
	margin: 40,
	fontWeight: 300
	
  },

});

export default function DocumentationPage() {
  const classes = useStyles();
  return (
    <div className={classes.root} >

<Grid container spacing={3} xs={12} md={12} lg={12}>
      
  <Grid item xs={12} md={3} lg={3}>
    <div class="nav-docs">
	<div class="nav-docs-section">
		<h3><a href="#thefa"> FAQs </a></h3>
		<h3><a href=" #getting-started">Getting Started</a></h3>
			<a href=" #modules_data_vis">Modules Data Visualisation</a>
			<li><a href=" #data_source2">1.1 Data Source</a>
			</li><li><a href=" #data_processing2">1.2 Data Processing</a>
			</li><li><a href=" #calculation_metrics2">1.3 Calculation Metrics</a>
			<br/>
			<a href=" #tools_data_vis">Tools Data Visualisation</a>
			</li><li><a href=" #data_source1">2.1 Data Source</a>
			</li><li><a href=" #data_processing1">2.2 Data Processing</a>
			</li><li><a href=" #calculation_metrics1">2.3 Calculation Metrics</a>
			<br/>
                        <a href=" #school_level_vis">School Dashboard Visualisations</a>
			</li><li><a href=" #data_source3">3.1 Data Source</a>
		       </li><li><a href=" #data_processing3">3.2 Data Processing</a>
		       </li><li><a href=" #calculation_metrics3">3.3 Calculation Metrics</a>
	
	</li></div>
    </div>
</Grid>
 <Grid item xs={12} md={8} lg={8} >
	 <div id="thefaq">
	 	 <FaqPage/>
  </div> 
    <div class="inner-content">
      <h1>Introduction</h1>
         <div class="section" id="getting-started">
          <h2>Getting Started</h2>
             <p>This page contains documentation of methodology and data processing involved in generating visualisations for this website.
		We have a section for each type(based on data source) of visualisation, with all the information about data source, processing and 
		different metrics used. The questions underlying these visualisations are outcome of collaborative exploration between CLIx technology team and implementation, domain, research and various other teams. Please refer <a  href="https://github.com/CLIxIndia-Dev/clix_dashboard_backend_AF/tree/master/dags/scripts/clix_platform_data_processing" target="_blank" rel="noreferrer" >these</a> scripts for more detailed look into data processing methodology.  </p>


	 <div class="section" id="modules_data_vis">
	     <h3> Module Data Visualisation</h3> 
	        {/* <!--      	
		        <blockquote class="epigraph">
			 <p>A language isn't something you learn so much as something you join.</p>
			 <p class="attribution">—<a class="reference external" href="http://arikaokrent.com/">Arika Okrent</a></p>
	   		</blockquote>
                --> */} 
   	   	       <div class="section" id="data_source2">
		       <h4> 1.1 Data Source:</h4>
		       <p align="justify">Module level progress csvs are generated every hour in each school and is packaged in to syncthing tar file which 
		       is referred as thin data. Each csv, lists the students along with their buddies if any and quantitative data in a 
		       cummulative way. This quantitative data talks about the total lessons, activites visited along with the percentage of 
		       completion and even the number of times a particular activity being visited.<br/><br/>
		       
		       For eg: if there is a file generated on a particular day at 12h09min which contains few students data, 
		       the next file of 13h09min has the cummulative data(data of 12h09min file plus the data generated in between 12th hr to 
		       13th hr). Hence cummulative.                       
		       </p>
                       </div>

		       <h4> Important Note:</h4>
		       <p>
		       As students can explore the courses even without logging into the platform, each of such entry corresponds to anonymous 
		       user ‘0’. But while fetching data related to a particular module the extraction of anonymous user’s data is not considered 
		       unlike tools data as they are generated from 3rd party not by the platform itself.
		       </p>
		      <div class="section" id="data_processing2"> 
			<h4>1.2 Data Processing:</h4>
			<p align="justify">
			Following steps are followed as part of collating the progress data across all schools of a particular state for a given 
			month of enagagement:
			</p>
			<h5> Data Fetching </h5> <p>Since the data generated is in a cummulative way, we need to find the latest file created on the 
			last day of that month. This includes all the data since the enagagement started in that school till that month.</p>
			<h5> Data Cleaning </h5> <p>As part cleaning, have removed all the rows pertaining to internal accounts and the resultant csv 
			holds data only pertaining to the student Ids ending with the schools code eg: red-bull-rj1 etc.</p>
			<h5> Data Collation </h5> <p>All the latest course progress csvs from every school are then collated into a single csv along 
			with inclusion of few new columns which are as follows:</p>
                        <p> 
			<i>Date</i>:The last date of the given month on which enagegment took place in a particular school.<br/>
			<i>Day, Month, Year</i>: These columns are populated by splitting the above Date column value accordingly.<br/>
			<i>UnitCode</i>:Each unit is given a unique code given by Research Team and the same is populated respectively.<br/><br/>
                        </p>
			<h5>Data Aggregation </h5> <p>Aggregation is done on the final collated csv by grouping on server_id and module_name columns 
			to calculate the following:</p>
                         
			- Number of students who visited a particular module<br/>
			- Average percentage if activities visited in a module<br/><br/>

	 	      </div>
                    <div class="section" id="calculation_metrics2">
		        <h4>1.3 Calculation of Metrics:</h4> 
                        <p>
                        </p><h5>Total Number of Days Used</h5> 
			  <h6> How many students have gone through a particular module in a given school? </h6>
		          <p>This gives us the total number of students who have gone through a particular module. In a given school, 
			  for each module, we add up number of unique user_id's to get total number of students.</p>
                        <h5>Average Percentage of Activities Visited in a Module</h5>
		          <h6> What is the percentage of activities visited by a student in a given module? </h6> 
		          <p>This gives us the average percentage of activities visited by any of students who have gone through a 
			  particular module. In a given school, for each module, we calculate the sum of percentage_activities_visited and 
			  then average it across number of students.</p>

                      <p></p>
		    </div><br/> 
	   		  
	   	</div> 
         </div>
     

	        <div class="section" id="tools_data_vis">
	     <h3> Tools Data Visualisation</h3> 
	        {/* <!--      	
		        <blockquote class="epigraph">
			 <p>A language isn't something you learn so much as something you join.</p>
			 <p class="attribution">—<a class="reference external" href="http://arikaokrent.com/">Arika Okrent</a></p>
	   		</blockquote>
                --> */}
   	   	       <div class="section" id="data_source1">
		       <h4> 2.1 Data Source:</h4>
		       <p align="justify">Primary Source of tools data is json file generated whenever a user accesses Tools/Apps section of the 
			  CLIx software. These files along with other thin data are available from schools as part of synthing data.
			  In a given school (in a particular machine), seperate json file is generated for each tool. 
			  This json file will have logs of all the users of the tool on that machine.
                       </p>
                       <h4>Important Note:</h4>
		       <p> One specific aspect of project implementation is that not all students who are using the platform are registered. These non-registered 
		       users  correspond to anonymous users and are logged with common user_id(=0). So logs corresponding to anonymous user is 
		       usually due to more than one student. In all these cases, we have left out anonymous user observations (as it is difficult to 
		       infer student level activity). They actually correspond to substantial part of the total observations. We have a simple 
		       methodology as of now to approximate number of users in anonymous user_id, but have deffered its implementation until we discuss this with 
		       research and other teams.
                       </p>
                       </div>
		      <div class="section" id="data_processing1"> 
			<h4>   2.2 Data Processing:</h4>
	 	       <p>To process tools data, we first convert json files into csv files extracting only information relevant for our analysis.
		       All these csv files of tools across all the schools is collated to create one big csv file. Each row of 
		       this <a href="https://clixindia-dev.github.io/clix_vis_demo/pages/data_source.html" target="_blank" rel="noreferrer">csv file</a> corresponds to a unique log of a user with the 
		       following features (columns): <br/><br/>

		      <i>school_server_code</i>: Unique code of the school in which log is generated<br/>
		      <i>user_id</i>: Unique id of a student creating the log<br/>
		      <i>tool_name</i>: Tool name of the tool being accessed<br/>
		      <i>created_at</i>: Timestamp of creation of the log <br/>
		      <i>date_created</i>: Date of creation of log <br/>
		      <i>time_spent</i>: Time spent by a student(=user_id) on the tool(=tool_name) on a given day(=date_created). This is 
		      calculated by taking time difference between first and last log time_stamps of a every user_id in a given day.<br/>
		      <i>state_code</i>: State in which machine is located<br/><br/>
		      </p>
		      </div>
                    <div class="section" id="calculation_metrics1">
		        <h4> 2.3 Calculation of Metrics:</h4> 
                        <p>
			</p><h5>Total Number of Days Tool is Used </h5> 
			  <h6> How many days was the tools section of the platform used during the observation period? </h6>
		          <p align="justify">This corresponds to total number of days tools section was accessed (irrespective of the time spent) by students. 
		           In a given school, for each tool, we add up all unique date entries (a date entry corresponds to atleast one student accessing tool). 
			   This sum gives us the total number of unique days a tool was accessed by students during the observation period.</p>
                       <h5>Number of Students Engaging with different Tools per Day</h5>
		          <h6> How many students engaged with different tools per day? </h6> 
		          <p>In a given school, number of unique users in a day is calculated for each tool. This number is averaged across all days for every tool
			  across the observation period. Please note that for each tool averaging is done considering only dates on which it was used, so time period 
			  across which we are averaging could be different for different tools. So we cannot add-up the tool averages in a school to comment on 
			  average number of students in a day.</p>
                       <h5>Total Number of Students Engaged in a School </h5>
		          <h6> How many students in total were engaged with a particular tool in a given school? </h6> 
		          <p>This is the aggregate number of unique students engaged with each tool of the platform. In a given school, for each 
		          tool, we add up number of unique user_id's (during the whole period of observation) to get number of students. 
			  Summed up number on y-axis can be interpreted as total number of unique students engaged with the tools for the corresponding school.</p>
 
                       <h5>Time Spent by students on different tools per day</h5>
		         <h6> How much time did all students spend with different tools per day? </h6> 
		         <p>In a given school, time spent in a day by all students on each tool is calculated (only for days on which students logged 
			 into that particular tool). This number for each tool is averaged across observation period. Please note that days across 
			 which each tool's time spent is being averaged could be different, so cannot add-up the tool numbers in a school to 
			 talk about total time spent in a day. </p>   
		      <h5> Monthly Variation of Time Spent on Tools per day</h5>
		         <h6> How is the time spent by all students in a day on different tools changing over months? </h6>
		         <p>In a given month, daily time spent on different tools by all students is calculated for all schools. Range of these 
			 daily time spent numbers are represented using min/max.</p>
                      <p></p>

		    </div><br/> 
           <div class="section" id="school_level_vis">
	     <h3> School Dashboard Visualisations</h3> 
	        {/* <!--      	
		        <blockquote class="epigraph">
			 <p>A language isn't something you learn so much as something you join.</p>
			 <p class="attribution">—<a class="reference external" href="http://arikaokrent.com/">Arika Okrent</a></p>
	   		</blockquote>
                --> */}
   	   	       <div class="section" id="data_source3">
		       <h4> 3.1 Data Source:</h4>
		       <p align="justify">Primary source of data for these visuals is syncthing data which comprises of tools data (json logs) and modules data (csv files). 
		       At the time of development of these visuals activity timestamp data was not available. Tools data is json file generated whenever a 
		       user accesses Tools/Apps section of the CLIx software. Each module(progress) csv, lists the students along with their buddies if any 
		       and quantitative data in a cummulative way.
                       </p>
                       <h4>Important Note:</h4>
		       <p> One important aspect of project implementation is that a typical student gets the same id throughout the observation period only 
		       60%(as per rough estimates) of the time. So it is hard to track the progress of an individual student. Also modules data is registered 
		       with a margin of error close to a day, as scripts are triggered periodically whenever there is power. Tools data is registered at precise 
		       times as and when they occur.</p>
                       </div>
		      <div class="section" id="data_processing3"> 
			<h4> 3.2 Data Processing:</h4>
	 	       <p align="justify">To process tools data, we first convert json files into csv files extracting only information relevant for our analysis.
		       All these csv files of tools across all the schools is collated to create one big csv file. Each row of 
		       this <a href="https://clixindia-dev.github.io/clix_vis_demo/pages/data_source.html" target="_llank" rel="noreferrer">csv file</a> corresponds to a unique log of a user with the 
		       following features (columns): <br/><br/>

		      <i>school_server_code</i>: Unique code of the school in which log is generated<br/>
		      <i>user_id</i>: Unique id of a student creating the log<br/>
		      <i>tool_name</i>: Tool name of the tool being accessed<br/>
		      <i>created_at</i>: Timestamp of creation of the log <br/>
		      <i>date_created</i>: Date of creation of log <br/>
		      <i>time_spent</i>: Time spent by a student(=user_id) on the tool(=tool_name) on a given day(=date_created). This is 
		      calculated by taking time difference between first and last log time_stamps of a every user_id in a given day.<br/>
		      <i>state_code</i>: State in which machine is located<br/><br/>
		      </p>
                      <p> Modules data is generated by collating progress csv files generated in a given school. Collation is achieved by 
		      combining csvs and then filtering out only those logs where there is increase in percentage of student activity. This 
		      results in a single csv for a given school with data corresponding to all students with their progression through modules.</p>

		      </div>
                    <div class="section" id="calculation_metrics3">
		        <h4> 3.3 Calculation of Metrics:</h4> 
                        <p>
			</p ><h5>Attendance of Modules and Tools</h5> 
			  <h6> How many students were present working on modules or tools section on a given day? </h6>
		          <p>Each bar represents a unique number of logins for tools and modules section of the platform.
			   In a given school, for each day that has some login information, number of unique login ids are calculated. This 
			   is done for both tools and modules data independently and stacked bar chart is constructed using this data. Please note
			   that there is a margin of error in determing exact day on which module was done, though 80 percent of the times it is exact. </p>
                       <h5>CLIx Server Usage</h5>
		          <h6> How are days modules and tools are rolled out during the observation period? How many days the server was running but there was no activity?</h6> 
		          <p>In a given school, we are trying to estimate number of days only tools are done, only modules are done and modules-tools done together. 
			  Key idea we wanted to use is - If a student does a module and the related tool within 1 day(earlier or later), we want to consider that the 
			  student has done those tools and modules together. we know timestamp of module usage upto the nearest days and tools usage timestamp 
			  exactly, so there is always a margin of error. But this is the best estimate we could think of. Also we consider the tool or module is 
			  done if there is a log, irrespective of how much they engaged with them.</p>
                       <h5>Students Engagement with Modules</h5>
		          <h6> How many students participated in different modules on a given day of a school CLIx lab? </h6> 
		          <p>For a given school, we calculate the number of unique logins attempting different modules on a particular day. Please note that 
			  same student might have done more than one module in a given day and we count him/her for every different module he/she attempts.</p>
 
                       <h5>Students Engagement with Tools</h5>
		       <h6>How many students participated in different tools on a given day of a school CLIx lab? </h6> 
		         <p>For a given school, we calculate the number of unique logins attempting different tools on a particular day. Please note that whenever 
			  there is anonymous user(=0), we will count it as one login. Also same student might have 
			 done more than one tool in a day and we count him/her for every different tool he/she attempts. </p>

                      <p></p>

		    </div><br/>
</div></div></div>
</Grid>

{/* <FaqPage/> */}

      </Grid>

      {/* <Typography variant="h5" align='justify' gutterBottom>
        About
      </Typography> */}

   {/* <Typography variant="body2" align='justify' gutterBottom> 
      This demo website provides access to visualisations of various datasets being generated from
      CLIxPlatform - a student learning platform - as part of Connected Learning Initiative (CLIx).
      The objective is that different teams across CLIx project can explore these datasets through
      visualisations built on top of raw data. Also each school can login with its school credentials
      to access school level live dashboards. The data is mainly coming from the CLIx server at the
      school ICT lab through syncthing. Questions explored in these visualisations are outcome of
      collaborative exploration between CLIx technology team and implementation, domain,
      research and various other teams. This is just an alpha site (very initial glimpses) towards an
      aspirational meta-visualization dashboard.
      </Typography>
  */}
    
      {/* <Typography variant="body2" align="justify" gutterBottom>
      
      
      The Connected Learning Initiative (CLIx) is a technology-enabled initiative at scale for high school students. The initiative was seeded by Tata Trusts, Mumbai and is led by Tata Institute of Social Sciences, Mumbai and Massachusetts Institute of Technology, Cambridge, MA USA. CLIx offers a scalable and sustainable model of open education, to meet the educational needs of students and teachers. 
Students use CLIx platform regularly generating a lot of datasets which are being processed and analyzed to have insights about the implementation. This dashboard provides access to the visualizations at various levels viz. State, District and School Levels.  
      
      </Typography>
            <img src={clixdemopicurc} alt="clix image"/> 
           */}
         
    </div>
  );
}


