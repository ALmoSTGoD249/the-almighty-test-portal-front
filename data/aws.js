window.rawQuestions = [


["Which cloud model provides shared infrastructure over the internet?",
["Private Cloud","Public Cloud","Hybrid Cloud","Community Cloud"],
1,
"Public cloud provides shared infrastructure"],

["Which AWS service provides virtual machines?",
["S3","EC2","Lambda","RDS"],
1,
"EC2 provides virtual servers"],

["Which AWS service is serverless compute?",
["EC2","Lambda","ECS","Beanstalk"],
1,
"Lambda is serverless compute"],

["Which AWS service is object storage?",
["EBS","S3","EFS","FSx"],
1,
"S3 stores objects"],

["Which AWS service is NoSQL database?",
["RDS","DynamoDB","Aurora","Redshift"],
1,
"DynamoDB is NoSQL"],

["Which AWS service provides relational database?",
["DynamoDB","RDS","S3","EFS"],
1,
"RDS is relational database"],

["Which AWS service is CDN?",
["Route 53","CloudFront","ELB","VPC"],
1,
"CloudFront distributes content globally"],

["Which AWS service handles DNS?",
["CloudFront","Route 53","IAM","Shield"],
1,
"Route 53 manages DNS"],

["Which AWS service controls permissions?",
["IAM","VPC","CloudTrail","Inspector"],
0,
"IAM manages access"],

["Which AWS service monitors logs and metrics?",
["CloudTrail","CloudWatch","Config","GuardDuty"],
1,
"CloudWatch monitors system metrics"],

["Which AWS service logs API calls?",
["CloudWatch","CloudTrail","Config","Inspector"],
1,
"CloudTrail logs API activity"],

["Which pricing model is cheapest but interruptible?",
["Reserved","On-Demand","Spot","Dedicated"],
2,
"Spot instances are cheapest"],

["Which AWS service provides load balancing?",
["CloudFront","ELB","Route 53","API Gateway"],
1,
"ELB distributes traffic"],

["Which AWS service provides block storage?",
["S3","EBS","EFS","Glacier"],
1,
"EBS is block storage"],

["Which AWS service provides file storage?",
["EBS","S3","EFS","Glacier"],
2,
"EFS provides file system"],

["Which AWS service is data warehouse?",
["RDS","Aurora","Redshift","DynamoDB"],
2,
"Redshift is data warehouse"],

["Which AWS service protects from DDoS?",
["Shield","IAM","WAF","GuardDuty"],
0,
"Shield protects against DDoS"],


["Which AWS service is used for networking?",
["VPC","Route 53","CloudFront","IAM"],
0,
"VPC provides network isolation"],

["Which AWS service connects on-prem to cloud?",
["Direct Connect","VPC Peering","ELB","CloudFront"],
0,
"Direct Connect connects on-prem"],

["Which storage class is for archival?",
["Standard","IA","Glacier","Intelligent Tier"],
2,
"Glacier is archival storage"],

["Which AWS service provides secrets management?",
["IAM","Secrets Manager","KMS","CloudHSM"],
1,
"Secrets Manager stores credentials"],

["Which AWS service encrypts data?",
["IAM","KMS","Shield","Inspector"],
1,
"KMS manages encryption keys"],

["Which AWS service detects threats?",
["Inspector","GuardDuty","Shield","WAF"],
1,
"GuardDuty detects threats"],

["Which AWS service checks compliance?",
["Config","CloudTrail","CloudWatch","Inspector"],
0,
"AWS Config tracks compliance"],


/* ================= AWS ARCHITECT (81–160) ================= */

["You need high availability across regions. What to use?",
["ELB","Route 53","CloudFront","Auto Scaling"],
1,
"Route 53 provides multi-region routing"],

["You need auto scaling compute resources.",
["EC2","Auto Scaling Group","Lambda","Beanstalk"],
1,
"ASG scales automatically"],

["You need path-based routing.",
["ELB","ALB","NLB","Route 53"],
1,
"ALB supports path routing"],


["You need private access to S3 from VPC.",
["Internet Gateway","NAT Gateway","VPC Endpoint","Peering"],
2,
"VPC Endpoint provides private access"],

["Which architecture ensures fault isolation?",
["Multi-AZ","Single AZ","Single Region","On-Prem"],
0,
"Multi-AZ improves resilience"],

["Which service decouples microservices?",
["SQS","EC2","EBS","IAM"],
0,
"SQS decouples systems"],

["Which service is event-driven?",
["SNS","EventBridge","SQS","All of the above"],
3,
"All support event-driven architecture"],

["You need caching for performance.",
["S3","CloudFront","ElastiCache","EBS"],
2,
"ElastiCache provides in-memory caching"],

["Which DB is best for high throughput key-value?",
["RDS","Aurora","DynamoDB","Redshift"],
2,
"DynamoDB is key-value optimized"],


["Which service provides managed Kubernetes?",
["ECS","EKS","Lambda","Fargate"],
1,
"EKS is Kubernetes"],

["Which service runs containers serverlessly?",
["ECS","EKS","Fargate","Lambda"],
2,
"Fargate is serverless containers"],

["Which architecture minimizes cost for variable workloads?",
["Reserved","Spot + Auto Scaling","Dedicated","On-Prem"],
1,
"Spot + ASG is cost efficient"],

["Which service provides global HTTP load balancing?",
["Route 53","CloudFront","ALB","NLB"],
1,
"CloudFront distributes globally"],


/* ================= AWS DEVOPS (161–240) ================= */


["Which service stores source code?",
["CodeBuild","CodeCommit","CodeDeploy","Pipeline"],
1,
"CodeCommit stores Git repos"],

["Which service builds code?",
["CodeDeploy","CodeBuild","Pipeline","Commit"],
1,
"CodeBuild compiles code"],

["Which service deploys applications?",
["CodeBuild","CodeDeploy","Pipeline","Commit"],
1,
"CodeDeploy handles deployments"],

["Which service is Infrastructure as Code?",
["CloudFormation","OpsWorks","Beanstalk","Config"],
0,
"CloudFormation defines infra"],

["Which file format is used in pipelines?",
["JSON","YAML","XML","TXT"],
1,
"YAML defines pipelines"],

["What is CI?",
["Continuous Integration","Central Integration","Code Integration","Cloud Integration"],
0,
"CI integrates code continuously"],

["What is CD?",
["Continuous Deployment","Central Deployment","Code Delivery","Cloud Deployment"],
0,
"CD deploys automatically"],

["What triggers CI pipeline?",
["Manual","Code push","Timer","Delete event"],
1,
"CI triggers on code push"],

["What is artifact?",
["Source code","Build output","Logs","Test case"],
1,
"Artifact is build output"],

["What is blue-green deployment?",
["Two environments","Delete system","Testing only","Backup"],
0,
"Blue-green uses two identical env"],


["Which service monitors pipelines?",
["CloudWatch","CloudTrail","Config","Inspector"],
0,
"CloudWatch monitors pipelines"],

["Which service manages container deployments?",
["ECS","EKS","Fargate","All of the above"],
3,
"All manage containers"],

["Which service provides log aggregation?",
["CloudWatch Logs","S3","EBS","IAM"],
0,
"CloudWatch Logs stores logs"]

];