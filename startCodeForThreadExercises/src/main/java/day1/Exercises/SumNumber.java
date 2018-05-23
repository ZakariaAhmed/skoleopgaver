/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package day1.Exercises;

/**
 *
 * @author Jens
 */
public class SumNumber implements Runnable{
    private long sum;
    
    public void run(){
      
         for (long i = 1; i <= 1000000000L; i++){
             
            this.sum += i;
            
        }
         
         System.out.println(this.sum);
    };
}
