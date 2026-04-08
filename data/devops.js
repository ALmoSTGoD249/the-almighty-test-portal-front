window.rawQuestions = [

["You need to automate build and deployment after every code push. Which approach should you use?",
["Manual deployment","CI/CD pipeline","Backup policy","VM snapshot"],
1,
"CI/CD pipelines automate build and deployment"],

["A developer pushes code to Git. What should trigger automatically?",
["Manual approval","CI pipeline","Backup job","Scaling"],
1,
"CI pipeline triggers on code push"],

["Which Azure DevOps service manages source code?",
["Boards","Repos","Pipelines","Artifacts"],
1,
"Azure Repos manages code"],

["Which service is used for build automation?",
["Boards","Repos","Pipelines","Artifacts"],
2,
"Azure Pipelines handles builds"],

["Which service tracks work items?",
["Boards","Repos","Pipelines","Artifacts"],
0,
"Azure Boards tracks tasks"],

["Which service stores packages?",
["Boards","Repos","Artifacts","Pipelines"],
2,
"Artifacts store packages"],

["What is Infrastructure as Code?",
["Manual config","Code-based infra","Monitoring tool","Backup method"],
1,
"IaC uses code to provision infra"],

["Which tool is used for IaC?",
["Terraform","Excel","Paint","Word"],
0,
"Terraform provisions infrastructure"],

["Which Microsoft IaC tool is used?",
["ARM Templates","Notepad","PowerPoint","Visio"],
0,
"ARM templates define Azure infra"],

["You need reusable pipeline definitions. What should you use?",
["JSON","YAML","TXT","CSV"],
1,
"YAML defines pipelines"],

["What is a commit?",
["Delete code","Save changes","Deploy app","Test code"],
1,
"Commit saves changes"],

["What is branching?",
["Merge code","Separate version","Delete code","Deploy code"],
1,
"Branching creates isolated code"],

["What is a pull request?",
["Delete request","Merge request","Backup request","Deploy request"],
1,
"PR merges code"],

["What is continuous integration?",
["Manual testing","Frequent code merging","Deployment","Monitoring"],
1,
"CI merges code frequently"],

["What is continuous deployment?",
["Manual deploy","Auto deploy","Monitoring","Testing"],
1,
"CD deploys automatically"],

["You need rollback after failure. What should be used?",
["Snapshot","Rollback","Backup","Clone"],
1,
"Rollback restores previous version"],

["What is artifact?",
["Source code","Build output","Log","Test"],
1,
"Artifact is compiled output"],

["What is pipeline?",
["Storage","Workflow","VM","DB"],
1,
"Pipeline automates tasks"],

["Which pipeline runs tests?",
["CI","CD","Manual","Backup"],
0,
"CI runs tests"],

["Which pipeline deploys code?",
["CI","CD","Manual","Test"],
1,
"CD deploys app"],

["You need high availability deployment. What to use?",
["Blue-green","Single server","Manual","Backup"],
0,
"Blue-green ensures zero downtime"],

["What is canary deployment?",
["Full release","Gradual rollout","Delete","Backup"],
1,
"Canary deploys gradually"],

["You need monitoring after deployment. What is used?",
["Monitor","Backup","Deploy","CI"],
0,
"Monitoring tracks performance"],

["Which service monitors logs?",
["Monitor","Policy","RBAC","Backup"],
0,
"Azure Monitor collects logs"],

["Which tool analyzes logs?",
["Log Analytics","Policy","RBAC","VM"],
0,
"Log Analytics queries logs"],

["You need alert when CPU > 80%. What to use?",
["Policy","Alert rule","Backup","RBAC"],
1,
"Alerts notify threshold breaches"],

["What is DevOps?",
["Only dev","Only ops","Collaboration","Testing"],
2,
"DevOps combines dev and ops"],

["You need secure secret storage. What should be used?",
["Key Vault","Blob","VM","Disk"],
0,
"Key Vault stores secrets"],

["Which service stores secrets?",
["Key Vault","Storage","VM","DB"],
0,
"Key Vault secures secrets"],

["What is RBAC?",
["Monitoring","Access control","Backup","Policy"],
1,
"RBAC manages permissions"],

["Which role gives read-only access?",
["Reader","Contributor","Owner","Admin"],
0,
"Reader is read-only"],

["Which role allows full access?",
["Reader","Contributor","Owner","User"],
2,
"Owner has full control"],

["What is scaling?",
["Backup","Increase resources","Delete","Test"],
1,
"Scaling increases capacity"],

["What is auto scaling?",
["Manual","Automatic","Backup","Delete"],
1,
"Auto scaling adjusts resources"],

["Which Azure service scales VMs?",
["Scale Set","VM","Disk","Storage"],
0,
"Scale Set scales VMs"],

["You need global traffic routing. What to use?",
["Load Balancer","Traffic Manager","NSG","VM"],
1,
"Traffic Manager routes globally"],

["Which service balances local traffic?",
["Load Balancer","Traffic Manager","DNS","Policy"],
0,
"Load Balancer distributes locally"],

["Which service routes HTTP traffic?",
["App Gateway","VM","NSG","Disk"],
0,
"App Gateway routes HTTP"],

["Which protects web apps?",
["WAF","NSG","VM","Disk"],
0,
"WAF protects apps"],

["What is NSG?",
["Storage","Firewall","Network filter","Backup"],
2,
"NSG filters traffic"],

["What is firewall?",
["Storage","Security","Compute","DB"],
1,
"Firewall protects network"],

["What is DDoS protection?",
["Backup","Attack protection","Storage","VM"],
1,
"DDoS protects from attacks"],

["What is CI trigger?",
["Manual","Code push","Backup","Delete"],
1,
"CI triggers on push"],

["What is CD trigger?",
["Manual","Release","Delete","Backup"],
1,
"CD triggers deployment"],

["What is version control?",
["Delete code","Track changes","Backup","Deploy"],
1,
"Version control tracks code"],

["Which system used in Azure?",
["Git","SVN","Mercurial","All"],
3,
"Azure supports multiple"],

["What is merge conflict?",
["Error","Code clash","Backup","Delete"],
1,
"Conflict occurs when code differs"],

["What is staging environment?",
["Production","Testing stage","Backup","Delete"],
1,
"Staging tests before prod"],

["What is production environment?",
["Test","Live system","Backup","Dev"],
1,
"Production is live"],

["What is test environment?",
["Production","Testing","Backup","Delete"],
1,
"Test env used for testing"],

["What is debugging?",
["Delete code","Find errors","Deploy","Backup"],
1,
"Debugging finds bugs"],

["What is logging?",
["Delete","Record events","Deploy","Backup"],
1,
"Logging records activity"],

["What is monitoring?",
["Backup","Observe system","Delete","Deploy"],
1,
"Monitoring tracks system"],

["What is SLA?",
["Agreement","Backup","Delete","Test"],
0,
"SLA defines service level"],

["What is uptime?",
["Downtime","Availability","Delete","Backup"],
1,
"Uptime is availability"],

["What is downtime?",
["Availability","Outage","Backup","Deploy"],
1,
"Downtime is failure"],

["What is container?",
["VM","Lightweight app unit","Storage","DB"],
1,
"Container runs app"],

["Which tool manages containers?",
["Kubernetes","Excel","Word","Paint"],
0,
"Kubernetes manages containers"],

["What is Docker?",
["OS","Container tool","Backup","DB"],
1,
"Docker builds containers"],

["What is microservices?",
["Monolith","Small services","Backup","DB"],
1,
"Microservices split apps"],

["What is monolithic architecture?",
["Single unit","Multiple services","Backup","DB"],
0,
"Monolith is single app"],

["What is load testing?",
["Delete","Stress system","Deploy","Backup"],
1,
"Load testing checks performance"],

["What is stress testing?",
["Normal load","Extreme load","Backup","Delete"],
1,
"Stress tests limits"],

["What is performance testing?",
["Speed testing","Backup","Delete","Deploy"],
0,
"Performance testing checks speed"],

["What is pipeline stage?",
["Step","Storage","VM","Backup"],
0,
"Stage is pipeline step"],

["What is agent?",
["User","Runner","Storage","VM"],
1,
"Agent executes pipeline"],

["What is self-hosted agent?",
["Azure VM","Own server","DB","Storage"],
1,
"Runs on your machine"],

["What is hosted agent?",
["Your PC","Azure VM","DB","Storage"],
1,
"Runs in Azure"],

["What is YAML?",
["Language","Config","DB","Backup"],
1,
"YAML defines pipeline"],

["What is script?",
["Code block","DB","Backup","VM"],
0,
"Script executes commands"],

["What is release pipeline?",
["Build","Deploy","Backup","Delete"],
1,
"Release deploys"],

["What is build pipeline?",
["Deploy","Compile","Backup","Delete"],
1,
"Build compiles code"],

["What is artifact storage?",
["DB","Store builds","VM","Backup"],
1,
"Stores outputs"],

["What is CI/CD benefit?",
["Manual","Automation","Backup","Delete"],
1,
"Automation improves speed"],

["What is DevOps goal?",
["Speed","Collaboration","Delete","Backup"],
1,
"DevOps improves collaboration"],

["What is continuous monitoring?",
["Before","After deployment","Backup","Delete"],
1,
"Monitoring after deploy"],

["What is pipeline failure?",
["Error","Success","Backup","Delete"],
0,
"Failure means error"],

["What is pipeline success?",
["Error","Success","Backup","Delete"],
1,
"Success means completed"],

["What is code quality?",
["Bug free","Performance","Backup","Delete"],
0,
"Quality means fewer bugs"],

["What is linting?",
["Check syntax","Deploy","Backup","Delete"],
0,
"Linting checks code"],

["What is static analysis?",
["Run code","Analyze code","Backup","Delete"],
1,
"Static checks without running"],

["What is dynamic testing?",
["Run code","Analyze code","Backup","Delete"],
0,
"Dynamic tests execution"],

["What is DevOps lifecycle?",
["Plan-Build-Test-Deploy","Only build","Backup","Delete"],
0,
"Lifecycle stages"],

["What is pipeline automation?",
["Manual","Automated tasks","Backup","Delete"],
1,
"Automation improves workflow"],

["What is environment variable?",
["Config value","DB","Backup","Delete"],
0,
"Stores config values"],

["What is secrets management?",
["Store secrets","Delete","Backup","Deploy"],
0,
"Manages sensitive data"],

["What is versioning?",
["Delete","Track versions","Backup","Deploy"],
1,
"Versioning tracks changes"]

];