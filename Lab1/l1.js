<script>

var name="Petro";
alert(name); //1
var a=17;
var b=7;
var c=a-b;
var d=7;
var results=c+d;
alert(results);//2

var number=prompt("���� � ���� ������?");
if(number>=7)
	alert('³���');
else alert('������');//3

var number=prompt("���� � ���� ������?");
if(number%2==0)
alert(+number+7);
else alert(number-3);//4

var n;
n=prompt("���l��� ����� ������ �������:");
document.write("������� �����:");
for(var i=1;i<=n;i++)
document.write("<br /> " + Math.pow(i,2));
document.write("<br><br>");
document.write("����� �����:");//5

	
for (var i=2;  i<=n; i++) {
  var count = 0;
  for (var j=2; j<=i; j++) {
    if (i%j) {continue;}
    count += 1;
  }
  if (count == 1) document.write(' ',i);//6

}


</script>
