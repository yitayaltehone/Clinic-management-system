# web

### To build WEB image
``` docker build -t hms-web:dev . ```

### To run API with web
- Run from the image from API repo using the following command

``` docker-compose up -d ```

# Clinic Information Management system
I have added the registration form based up on the table described on the Hospital.sql
I have used  the roles on Triage, Recored officer, Doctor,Laboratorist,Pharmacist,Nurse and System Admin
Patient_Laboratory page for simplify the patient list in a specific Patient Data(in it is important)
(yitu(sew), meba (record), yibe(triage), eshet(Doctor(Internal dewey specialist)),gech Laboratory,kmap Pharmacist, selam Casher)


$request=$_POST['amount'];//accept from the user
$drugs=mysqli_query($conn,"select * from drugs where amount>0");
while($row=mysqli_fetch_array($drugs)){
    $drug_id=$row['drug_id'];
    $remaining=$row['amount'];
    if($remaining<$request){
        echo "Make sure the order of the Drugs, Expired Date";
        $update=mysqli_query($conn,"update drugs set amount=(amount-$remaining) where drug_id=$drug_id");
        $request=$request-$remaining;
    }
    else
    {
        $update=mysqli_query($conn,"update drugs set amount=(amount-$request) where drug_id=$drug_id");
        $row="stop";
      
    }
}


tasks that have to be doing
Refer both out and inside eachother ..
bed Management(paatient treatment)
Pharmacy Drug Amount
