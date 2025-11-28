


# 📩 SNS Email Notification Project (Node.js + AWS)

This project demonstrates how to send email notifications using **AWS SNS** integrated with a **Node.js application** hosted on an EC2 instance.

---

## 🚀 Project Workflow

- Create EC2 Instance  
- Install Node.js  
- Create SNS Topic  
- Add Email Subscription  
- Create IAM Role  
- Attach Role to EC2  
- Deploy Node.js App  
- Send Email via HTML Form  

---

# 🛠️ Installation Steps

## ✅ Step 1: Install Node.js on EC2
```bash
sudo yum install -y nodejs
node -v
npm -v
````

## ✅ Step 2: Initialize Node App

```bash
npm init -y
npm install express aws-sdk body-parser
```

---

## ✅ Step 3: Create `app.js`


## ✅ Step 4: Create `index.html`



## ✅ Step 5: Run App

```bash
node app.js
```

Visit:

```
http://<EC2-Public-IP>:3000
```

Allow port **3000** in Security Group.

---

# 📸 Project Screenshots



### EC2 Instance

![](./img/Ec2.png)

### SNS Topic

![](./img/SNS.png)

### IAM Role

![](./img/SNS%20role.png)

### Email Subscription

![](./img/Email%20subscription.png)

### Website Dashboard

![](./img/email%20dashboard.png)

### Success Message

![](./img/email%20send%20success.png)

### Email Received

![](./img/final%20emial%20on%20laptop.png)

---

# 🎉 Final Result

✔ SNS Topic Created
✔ Email Subscription Confirmed
✔ Node App Running
✔ Email Delivered Successfully

---


