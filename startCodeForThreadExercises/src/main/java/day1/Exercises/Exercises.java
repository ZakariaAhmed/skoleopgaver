/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package day1.Exercises;

import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.LongStream;

/**
 *
 * @author Jens
 */
public class Exercises {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        SumNumber sumbill = new SumNumber();
        CountFive cf = new CountFive();
        Thread3 th3 = new Thread3();
        
        
        Thread t1 = new Thread(sumbill, "SumBillion");
        Thread t2 = new Thread(cf, "Count to Five");
        Thread t3 = new Thread(th3, "Thread 3");
        
        
        
        t1.start();
        t2.start();
        t3.start();
        try {
            Thread.sleep(10000);
        } catch (InterruptedException ex) {
            Logger.getLogger(Exercises.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        th3.setIsCounting(false);
        
    }
    
}
