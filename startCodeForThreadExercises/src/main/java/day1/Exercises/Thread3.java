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
public class Thread3 implements Runnable {
    
    private volatile boolean isCounting = true;
    private volatile long count = 10;
    
    public void setIsCounting(boolean isCounting)
    {
        this.isCounting = isCounting;
    }
    
    
     public void run()
    {
        while (isCounting)
        {
            try
            {
                Thread.sleep(3000);
                if (isCounting == false)
                {
                    return;
                }
                System.out.println(count);

            } catch (InterruptedException e)
            {
                System.out.println(Thread.currentThread().getName() + " Interrupted!");
                return;
            }
            count++;
        }
    }
}
